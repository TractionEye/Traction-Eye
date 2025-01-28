import { FC, useEffect, useRef } from 'react';
import { Box, IconButton, Typography, Avatar, TextField, Divider } from '@mui/material';
import { WalletIcon, CloseIcon } from '@/components/icons';
import { Colors } from '@/constants';
import notcoinIcon from '@/assets/images/notcoin.png';
import usdtIcon from '@/assets/images/usdt.png';
import tonIcon from '@/assets/images/ton.png';

interface DepositContentProps {
    onClose: () => void;
    onInvest: () => void;
    amount: number;
    sendTokenAmount: string;
    setSendTokenAmount: (value: string) => void;
    canDoSwap: boolean;
    description: string;
    collateral: string;
    protocol: string;
}

const TOKEN_ICONS = {
    'USDT': usdtIcon,
    'TON': tonIcon,
    'NOT': notcoinIcon
} as const;

export const DepositContent: FC<DepositContentProps> = ({
    onClose,
    onInvest,
    amount,
    sendTokenAmount,
    setSendTokenAmount,
    canDoSwap,
    description,
    collateral,
    protocol
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    console.log('description', description, collateral, protocol);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleClose = () => {
        setSendTokenAmount("0");
        onClose();
    };

    return (
        <Box className="p-5">
            <Box className="relative flex flex-col items-center mb-4">
                <Box className="relative flex items-center justify-center w-full mb-[10px]">
                    <Typography className="text-white text-[20px] font-medium">
                        Deposit in strategy
                    </Typography>
                    <IconButton 
                        onClick={handleClose} 
                        sx={{ 
                            p: 0, 
                            color: 'white',
                            position: 'absolute',
                            right: 0,
                            top: '50%',
                            transform: 'translateY(-50%)'
                        }}
                    >
                        <CloseIcon withCircle={false} />
                    </IconButton>
                </Box>
                <Divider 
                    sx={{ 
                        width: '100%',
                        borderColor: '#707579'
                    }} 
                />
            </Box>

            <Box className="flex flex-col h-[52px] mx-[20px] my-[25px]">
                <Box className="flex items-center justify-between w-full mb-[6px]">
                    <Typography 
                        sx={{ 
                            color: '#707579',
                            fontSize: '8px'
                        }}
                    >
                        You invest
                    </Typography>
                    <Box className="flex items-center">
                        <WalletIcon color={Colors.blue} size={9} />
                        <Typography 
                            onClick={() => setSendTokenAmount(String(amount) ?? "0")}
                            sx={{ 
                                ml: "5.5px", 
                                color: Colors.blue, 
                                cursor: 'pointer',
                                fontSize: '8px'
                            }}
                        >
                            {amount ?? 0}
                        </Typography>
                    </Box>
                </Box>
                <Box className="flex items-center justify-between w-full">
                    <Box className="flex items-center gap-[6px]">
                        <Avatar 
                            sx={{ 
                                width: 24, 
                                height: 24,
                            }}
                        >
                            <img 
                                src={TOKEN_ICONS[collateral as keyof typeof TOKEN_ICONS]} 
                                alt={collateral}
                                width="24"
                                height="24"
                                className="rounded-full"
                            />
                        </Avatar>
                        <Typography 
                            sx={{ 
                                color: 'white',
                                fontSize: '12px'
                            }}
                        >
                            {collateral}
                        </Typography>
                    </Box>
                    <TextField
                        inputRef={inputRef}
                        value={sendTokenAmount}
                        placeholder="0.00"
                        onChange={(e) => setSendTokenAmount(e.target.value)}
                        type="number"
                        variant="outlined"
                        size="small"
                        sx={{
                            width: '160px',
                            '& .MuiInputBase-input': {
                                fontSize: '12px',
                                fontWeight: 500,
                                textAlign: 'right',
                                p: 0,
                                color: 'white',
                                '&::placeholder': {
                                    color: '#fff',
                                    opacity: 1
                                }
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none'
                            }
                        }}
                    />
                </Box>
                <Typography 
                    sx={{ 
                        color: '#707579',
                        fontSize: '9px',
                        textAlign: 'right'
                    }}
                >
                    ${(Number(sendTokenAmount) * 1).toFixed(2)}
                </Typography>
            </Box>

            <Divider 
                    sx={{ 
                        width: '100%',
                        borderColor: '#707579'
                    }} 
                />
            <Box className="mt-4 mb-4">
                <Typography 
                    sx={{ 
                        color: 'white',
                        fontSize: '10px',
                        textAlign: 'center',
                        mt: '32px',
                        mb: '29px'
                    }}
                >
                    Your assets will be available for withdrawal at any time
                </Typography>
            </Box>
            <button 
                className="w-full h-[40px] bg-[#FFD235] text-black rounded-xl font-medium text-[17px] mb-[20px] disabled:opacity-50"
                onClick={onInvest}
                disabled={!canDoSwap || !sendTokenAmount || Number(sendTokenAmount) < 100}
            >
                Invest
            </button>
        </Box>
    );
}; 