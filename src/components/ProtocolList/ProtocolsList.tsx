import { FC } from "react";
import {LiquidityPoolCard } from "./components";
import { IoMdGitNetwork } from "@/components/icons";
// import { MdOutlineKeyboardArrowRight } from "@/components/icons"; 
import STONLogo from "@/pages/IndexPage/stonfilogo.jpg";
import dedustLogo from "@/pages/IndexPage/dedustlogo.png";
import SettleTonLogo from "@/components/icons/SettleTon.svg";
import { useQuery } from "@tanstack/react-query";
import { API } from "@/api/api";
import { useTonAddress, useTonWallet } from "@tonconnect/ui-react";
import { CACHE_OPTIONS, ProtocolNames } from "@/constants";
import { SETTLE_API } from "@/api/settleTonApi";
// import { Link } from "react-router-dom";
// import { postEvent } from "@telegram-apps/sdk";

export const ProtocolsList: FC = () => {
    const userFriendlyAddress = useTonAddress();
    const wallet = useTonWallet();
  
    const { data: dedustData } = useQuery({
        queryFn: () => API.getDedustInfo(userFriendlyAddress),
        queryKey: ["dedust", userFriendlyAddress],
        enabled: !!userFriendlyAddress,
        ...CACHE_OPTIONS
    });

    const { data: stonFiData } = useQuery({
        queryFn: () => API.getStonfiInfo(userFriendlyAddress),
        queryKey: ["stonfi", userFriendlyAddress],
        enabled: !!userFriendlyAddress,
        ...CACHE_OPTIONS
    });

    const { data: settleTonData } = useQuery({
        queryFn: () => SETTLE_API.getSettleTonJettons(wallet?.account.address),
        queryKey: ["settleTon",wallet?.account.address],
        enabled: !!wallet?.account.address,
        ...CACHE_OPTIONS
    });
    
    return (
        <div className="tools mt-7">
            <p className="font-semibold flex items-center text-xl mb-6">
                <IoMdGitNetwork className="mr-2" /> Protocols
            </p>

            <ul>
                <li><LiquidityPoolCard poolName={ProtocolNames.StonFi} icon={STONLogo} poolData={stonFiData ?? []} /></li>
                <li className="mt-10"><LiquidityPoolCard poolName={ProtocolNames.DeDust} icon={dedustLogo} poolData={dedustData ?? []} /></li>
                <li className="mt-10"><LiquidityPoolCard poolName={ProtocolNames.SettleTON} icon={SettleTonLogo} poolData={settleTonData?.vaults ?? []} /></li>
                <li><LiquidityPoolCard poolName={ProtocolNames.SettleTON} icon={SettleTonLogo} hasIcon={false} poolData={settleTonData?.indexes ?? []} /></li>
            </ul>
        </div>
    )
};
