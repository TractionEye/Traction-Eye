import { useIntegration } from "@telegram-apps/react-router-integration";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
    bindMiniAppCSSVars,
    bindThemeParamsCSSVars,
    bindViewportCSSVars,
    initNavigator,
    useInitData,
    useMiniApp,
    useThemeParams,
    useViewport,
} from "@telegram-apps/sdk-react";
import React, { type FC, useEffect, useMemo, useState } from "react";
import { Link, Navigate, Route, Router, Routes } from "react-router-dom";
import { postEvent } from "@telegram-apps/sdk";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TonConnectUIProvider, useTonAddress } from "@tonconnect/ui-react";
import { Toaster } from "react-hot-toast";
import { routes } from "@/navigation/routes.tsx";
import { SocialCap, AssetsOff, IoMdWallet, SocialTrade } from "./icons";
import { useAuthStore } from "@/store/store";
import { GoogleAnalytics } from "@/services";
import bottomImage from '@/assets/images/bottom.png';
import { DepositSuccessModal } from "@/pages/SocialTradePage/components/DepositSuccessModal";
const queryClient = new QueryClient();

export const App: FC = () => {
    const miniApp = useMiniApp();
    const themeParams = useThemeParams();
    const viewport = useViewport();
    const userFriendlyAddress = useTonAddress();
    const initData = useInitData();

    const userId = initData?.user?.id;
    const username = initData?.user?.username;

    useEffect(() => {
        if (userId && username) {
            GoogleAnalytics.init({
                user_id: userId,
                username,
            });
            GoogleAnalytics.openMiniApp();
        }
    }, [userId, username]);

    useEffect(() => {
        return bindMiniAppCSSVars(miniApp, themeParams);
    }, [miniApp, themeParams]);

    useEffect(() => {
        return bindThemeParamsCSSVars(themeParams);
    }, [themeParams]);

    useEffect(() => {
        return viewport && bindViewportCSSVars(viewport);
    }, [viewport]);

    postEvent("web_app_expand");
    postEvent("web_app_setup_swipe_behavior", { allow_vertical_swipe: false });

    // Create a new application navigator and attach it to the browser history, so it could modify
    // it and listen to its changes.
    const navigator = useMemo(() => initNavigator("app-navigation-state"), []);
    const [location, reactNavigator] = useIntegration(navigator);
    const { setIsAuthenticated, isAuthenticated } = useAuthStore();

    useEffect(() => {
        if (userFriendlyAddress) {
            setIsAuthenticated(true);
        }
    }, [userFriendlyAddress]);

    useEffect(() => {
        switch (true) {
            case location.pathname === "/connect":
                postEvent("web_app_setup_back_button", { is_visible: false });
                miniApp.setHeaderColor("#000000");
                miniApp.setBgColor("#000000");
                break;
            case location.pathname === "/":
                postEvent("web_app_setup_back_button", { is_visible: false });
                miniApp.setHeaderColor("#1F2937");
                miniApp.setBgColor("#f9fafb");
                break;
            case location.pathname === "/friend":
                if (isAuthenticated) {
                    postEvent("web_app_setup_back_button", { is_visible: true });
                }
                miniApp.setHeaderColor("#1F2937");
                miniApp.setBgColor("#f9fafb");
                break;
            case location.pathname === "/profiles":
                postEvent("web_app_setup_back_button", { is_visible: true });
                miniApp.setHeaderColor("#f9fafb");
                miniApp.setBgColor("#f9fafb");
                break;
            case location.pathname === "/nfts":
            case location.pathname.startsWith("/nft"):
                postEvent("web_app_setup_back_button", { is_visible: true });
                miniApp.setHeaderColor("#f9fafb");
                miniApp.setBgColor("#f9fafb");
                break;
            case location.pathname.startsWith("/asset"):
                postEvent("web_app_setup_back_button", { is_visible: true });
                miniApp.setHeaderColor("#1F2937");
                miniApp.setBgColor("#f9fafb");
                break;
            case location.pathname === "/premium":
                postEvent("web_app_setup_back_button", { is_visible: true });
                miniApp.setHeaderColor("#000000");
                miniApp.setBgColor("#000000");
                break;
        }
    }, [location, miniApp]);

    // Don't forget to attach the navigator to allow it to control the BackButton state as well
    // as browser history.
    useEffect(() => {
        navigator.attach();
        return () => navigator.detach();
    }, [navigator]);

    const [value, setValue] = useState(0);
    // Bottom Navigation Handlers
    const handleNavigationChange = (event: React.ChangeEvent<unknown>, newValue: number) => {
        event.preventDefault();
        setValue(newValue);
        if (newValue === 0) {
            navigator.push("/");
        } else if (newValue === 1) {
            navigator.push("/social-trade");
        } else if (newValue === 2) {
            GoogleAnalytics.socialCapClick();
            navigator.push("/referral");
        }
    };

    useEffect(() => {
        if (location?.pathname === "/referral") {
            setValue(2);
        } else if (location?.pathname === "/social-trade") {
            setValue(1);
        } else {
            setValue(0);
        }
    }, [location?.pathname]);

    const [showConnectBtn, setShowConnectBtn] = useState(false);

    useEffect(() => {
        if (isAuthenticated) {
            setShowConnectBtn(false);
            return;
        }
        setShowConnectBtn(true);
    }, [isAuthenticated]);

    return (
        <div className="max-h-screen overflow-scroll">
            <TonConnectUIProvider>
                <QueryClientProvider client={queryClient}>
                    <Toaster position="top-right" reverseOrder={false} />
                    <Router location={location} navigator={reactNavigator}>
                        <Routes>
                            {routes.map((route) => (
                                <Route key={route.path} {...route} />
                            ))}
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                        {location?.pathname !== "/connect" && (
                            <>
                                <img 
                                    src={bottomImage} 
                                    alt="bottom" 
                                    className="fixed bottom-[89px] left-1/2 -translate-x-1/2 w-[53px] h-auto z-40"
                                    style={{ aspectRatio: 'auto' }}
                                />
                                <BottomNavigation
                                    value={value}
                                    onChange={handleNavigationChange}
                                    showLabels
                                    className="fixed bottom-0 w-full z-50 pb-safe"
                                    sx={{
                                        height: location?.pathname === "/friend" || showConnectBtn ? 0 : 90,
                                        background: 'linear-gradient(90deg, #494433 0%, #33332E 50%, #2E2E2E 100%)',
                                        padding: 0,
                                        margin: 0,
                                        border: 'none',
                                        '& .MuiBottomNavigationAction-root': {
                                            padding: 0,
                                            minWidth: 'auto'
                                        }
                                    }}
                                >
                                    <BottomNavigationAction icon={<AssetsOff isActive={value === 0} />} />
                                    <BottomNavigationAction 
                                        icon={<SocialTrade isActive={value === 1} />}
                                        onClick={() => {
                                            console.log("social trade");
                                            navigator.push("/social-trade");
                                        }}
                                        sx={{
                                            position: 'relative',
                                            top: '-12px',
                                            '& .MuiSvgIcon-root': {
                                                fontSize: '2rem',
                                                transform: 'scale(1.5)',
                                                marginBottom: '1rem'
                                            }
                                        }}
                                    />
                                    <BottomNavigationAction icon={<SocialCap isActive={value === 2} />} />
                                </BottomNavigation>
                            </>
                        )}
                        <DepositSuccessModal />
                        {showConnectBtn && !isAuthenticated && location?.pathname !== "/connect" ? (
                            <Link to="/connect?from=link">
                                <div className="absolute bottom-10 left-0 flex justify-center w-full">
                                    <a
                                        href={"/connect"}
                                        className={`py-3 bg-yellow-400 rounded-2xl w-[82%] sm:w-3/4 md:w-1/2 lg:w-1/3 flex justify-center items-center text-base sm:text-lg mr-3`}
                                    >
                                        <span className="flex items-center">
                                            <IoMdWallet size={24} className="text-lg mr-1" />
                                            <span>Connect Wallet</span>
                                        </span>
                                    </a>
                                </div>
                            </Link>
                        ) : null}
                    </Router>
                </QueryClientProvider>
            </TonConnectUIProvider>
        </div>
    );
};
