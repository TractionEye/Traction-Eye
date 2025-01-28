import { FC, useState, useMemo } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';
import { Drawer } from '@mui/material';
import { DepositContent } from './DepositContent';
import { API } from '@/api/api';
import { useQuery, useMutation } from '@tanstack/react-query';
import { CACHE_OPTIONS_FAST } from "@/constants";
import { TRUST_API } from '@/api/trustApi';
import { PaymentKind } from '@/api/trustApi';
import { setLocalStorageWithEvent } from '@/hooks/useLocalStorageSubscription';

interface DepositModalProps {
    isOpen: boolean;
    onClose: () => void;
    description: string;
    collateral: string;
    protocol: string;
}

const TOKEN_ADDRESSES = {
    'USDT': '0:b113a994b5024a16719f69139328eb759596c38a25f59028b146fecdc3621dfe',
    'TON': 'native',
    'NOT': '0:2f956143c461769579baef2e32cc2d7bc18283f40d20bb03e432cd603ac33ffc'
} as const;

export const DepositModal: FC<DepositModalProps> = ({ 
    isOpen, 
    onClose, 
    description,
    collateral,
    protocol 
}) => {
    const [sendTokenAmount, setSendTokenAmount] = useState("");
    const userFriendlyAddress = useTonAddress();

    const { data: externalData } = useQuery({
        queryKey: ["assets", userFriendlyAddress],
        queryFn: () => API.getAssetsByWallet(userFriendlyAddress),
        ...CACHE_OPTIONS_FAST
    });

    const { amount, canDoSwap } = useMemo(() => {
        const sendToken = externalData?.assets?.find(asset => 
            asset.address === TOKEN_ADDRESSES[collateral as keyof typeof TOKEN_ADDRESSES]
        );
        const amount = sendToken?.amount ? +sendToken.amount / Math.pow(10, +(sendToken?.decimals ?? 0)) : 0;
        const canDoSwap = amount ? amount >= Number(sendTokenAmount): false;
        
        return { amount, canDoSwap };
    }, [externalData?.assets, sendTokenAmount, collateral]);

    const createPaymentMutation = useMutation({
        mutationFn: TRUST_API.createPayment,
        onSuccess: (data) => {
            console.log('Payment created successfully', data);
            setLocalStorageWithEvent('paymentCreated', data.id);
            onClose();
        },
        onError: (error) => {
            console.error('Failed to create payment:', error);
        }
    });

    const handleInvest = () => {
        createPaymentMutation.mutate({
            address: userFriendlyAddress,
            amount: sendTokenAmount,
            token: collateral,
            kind: PaymentKind.INIT_STRATEGY
        });
    };

    const handleClose = () => {
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
        setSendTokenAmount("0");
        setTimeout(() => {
            onClose();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 30);
    };

    return (
        <Drawer
            anchor="bottom"
            open={isOpen}
            onClose={handleClose}
            disableScrollLock
            PaperProps={{
                sx: {
                    backgroundColor: '#1C1C1E',
                    borderTopLeftRadius: '30px',
                    borderTopRightRadius: '30px',
                    borderTop: '1px solid #FFD235',
                    WebkitTransform: 'translate3d(0,0,0)'
                }
            }}
        >
            <DepositContent 
                onClose={onClose}
                onInvest={handleInvest}
                amount={amount}
                sendTokenAmount={sendTokenAmount}
                setSendTokenAmount={setSendTokenAmount}
                canDoSwap={canDoSwap}
                description={description}
                collateral={collateral}
                protocol={protocol}
            />
        </Drawer>
    );
}; 