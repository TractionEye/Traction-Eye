import { FC, useEffect, useState } from 'react';
import { Box, Drawer, IconButton, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { TRUST_API } from '@/api/trustApi';
import { useLocalStorageSubscription, setLocalStorageWithEvent } from '@/hooks/useLocalStorageSubscription';
import SuccessIcon from '@/assets/images/SuccessIcon.png';
import { CloseIcon } from '@/components/icons';

export const DepositSuccessModal: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const paymentId = useLocalStorageSubscription('paymentCreated');

    const { data: paymentStatus } = useQuery({
        queryKey: ['paymentStatus', paymentId],
        // queryFn: () => TRUST_API.getPaymentStatus('8' || ''),
        queryFn: () => TRUST_API.getPaymentStatus('8'),
        enabled: !!paymentId,
        refetchInterval: 10000,
        staleTime: 0,
    });

    useEffect(() => {
        if (paymentStatus?.status === 'ok') {
            setIsOpen(true);
        }
    }, [paymentStatus]);

    const handleClose = () => {
        setIsOpen(false);
        setLocalStorageWithEvent('paymentCreated', '');
    };

    if (!paymentId) return null;

    return (
        <Drawer
            anchor="bottom"
            open={isOpen}
            onClose={handleClose}
            PaperProps={{
                sx: {
                    backgroundColor: '#1C1C1E',
                    borderTopLeftRadius: '30px',
                    borderTopRightRadius: '30px',
                    borderTop: '1px solid #FFD235',
                }
            }}
        >
        <Box className="p-5">
            <Box className="relative flex flex-col items-center mb-4">
                <img 
                    src={SuccessIcon}
                    alt="Success Icon" 
                    width={100} 
                    height={100}
                    className="mb-[10px]"
                />
                <IconButton 
                    onClick={handleClose} 
                    sx={{ 
                        p: 0, 
                        color: 'white',
                        position: 'absolute',
                        right: "12px",
                        top: "-4px",
                    }}
                >
                    <CloseIcon withCircle={false} />
                </IconButton>
            </Box>

            <Box className="mb-[50px]">
                <Typography 
                    sx={{ 
                        color: 'white',
                        fontSize: '15px',
                        textAlign: 'center',
                        fontWeight: 500,
                        fontFamily: 'Inter, sans-serif'
                    }}
                >
                    All ready to go!<br/>Start a successful trade to attract followers
                </Typography>
            </Box>
                <button 
                    className="w-full h-[40px] bg-[#FFD235] text-black rounded-xl font-medium text-[17px] mb-[20px] disabled:opacity-50"
                    onClick={handleClose}
                >
                    Yeah!
                </button>
            </Box>
        </Drawer>
    );
}; 