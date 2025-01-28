import { FC, useState } from 'react';
import { DepositModal } from './DepositModal';
import { useElementIntersection } from '@/hooks/useElementIntersection';
import { downgradeFontSize } from '@/utils';
import { Select, MenuItem } from '@mui/material';
import { IoIosArrowDown } from '@/components/icons';
import notcoinIcon from '@/assets/images/notcoin.png';
import usdtIcon from '@/assets/images/usdt.png';
import tonIcon from '@/assets/images/ton.png';

interface CollateralToken {
    value: string;
    name: string;
    ticker: string;
    icon: JSX.Element;
}

const collateralTokens: CollateralToken[] = [
    {
        value: 'USDT',
        name: 'Tether',
        ticker: 'USDT',
        icon: (
            <img 
                src={usdtIcon} 
                alt="USDT" 
                width="26" 
                height="26" 
                style={{ borderRadius: '50%' }}
            />
        )
    },
    {
        value: 'NOT',
        name: 'Notcoin',
        ticker: 'NOT',
        icon: (
            <img 
                src={notcoinIcon} 
                alt="Notcoin" 
                width="26" 
                height="26" 
                style={{ borderRadius: '50%' }}
            />
        )
    },
    {
        value: 'TON',
        name: 'Toncoin',
        ticker: 'TON',
        icon: (
            <img 
                src={tonIcon} 
                alt="Toncoin" 
                width="26" 
                height="26" 
                style={{ borderRadius: '50%' }}
            />
        )
    }
];

export const TraderSettings: FC = () => {
    const [description, setDescription] = useState('');
    const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
    const { fontSizeCounter, element1Ref, element2Ref } = useElementIntersection();    
    const [collateral, setCollateral] = useState('USDT');
    const [protocol, setProtocol] = useState('STORM');

    const handleOpenDepositModal = () => {
        setIsDepositModalOpen(true);
    };

    const handleCloseDepositModal = () => {
        setIsDepositModalOpen(false);
    };

    const selectStyles = {
        height: '40px',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        border: '1px solid rgba(255, 215, 0, 0.3)',
        borderRadius: '16px',
        color: 'white',
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none'
        },
        '& .MuiPaper-root': {
            backgroundColor: '#1C1C1E'
        }
    };

    const menuProps = {
        PaperProps: {
            sx: {
                bgcolor: '#1C1C1E',
                marginTop: '4px',
                borderRadius: '12px',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                '& .MuiMenuItem-root': {
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.15)'
                        }
                    }
                }
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[#1C1C1E]">
            <div className="h-[60px] flex items-center justify-center border-b border-gray-800">
                <h1 className="text-white text-[17px] font-normal">
                    Trader settings
                </h1>
            </div>

            <div className="flex flex-col flex-1 px-5 pt-[10px]">
                <div className="mb-6">
                    <div className="flex items-center justify-between gap-2">
                        <span className={`text-white ${downgradeFontSize("text-2xl", fontSizeCounter)} whitespace-nowrap`} ref={element1Ref}>
                            Strategy description
                        </span>
                        <span className={`text-white ${downgradeFontSize("text-base", fontSizeCounter)} whitespace-nowrap`} ref={element2Ref}>
                            (increase the trust of potential followers)
                        </span>
                    </div>
                    <textarea 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full h-[134px] mt-2 bg-[#000000]/20 border border-[#FFD700]/30 rounded-2xl p-3 text-white text-[11px] placeholder:text-gray-400 focus:outline-none"
                        placeholder="specify the recommended deposit for your strategy, maximum leverage used, maximum possible losses per day, minimum trade duration, maximum trade duration and trading pairs."
                        maxLength={300}
                    />
                    <div className="text-right text-gray-400 text-[13px] mt-1">
                        {description.length}/300
                    </div>
                </div>

                <div className="mb-5">
                    <label className="text-white text-[17px] block mb-2">
                        Select collateral
                    </label>
                    <Select
                        value={collateral}
                        onChange={(e) => setCollateral(e.target.value)}
                        fullWidth
                        IconComponent={() => <IoIosArrowDown className="text-[#FFD700] mr-2" size={20} />}
                        sx={selectStyles}
                        MenuProps={menuProps}
                    >
                        {collateralTokens.map((token) => (
                            <MenuItem key={token.value} value={token.value}>
                                <div className="flex items-center gap-2">
                                    {token.icon}
                                    <span>{token.name} ({token.ticker})</span>
                                </div>
                            </MenuItem>
                        ))}
                    </Select>
                </div>

                <div className="mb-6">
                    <label className="text-white text-[17px] block mb-2">
                        Select a trading protocol
                    </label>
                    <Select
                        value={protocol}
                        onChange={(e) => setProtocol(e.target.value)}
                        fullWidth
                        IconComponent={() => <IoIosArrowDown className="text-[#FFD700] mr-2" size={20} />}
                        sx={selectStyles}
                        MenuProps={menuProps}
                    >
                        <MenuItem value="STORM">
                            <div className="flex items-center gap-2">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10 2L3 6V14L10 18L17 14V6L10 2Z" stroke="#FFD700" strokeWidth="1.5"/>
                                </svg>
                                <span>Storm Trade DEX</span>
                            </div>
                        </MenuItem>
                    </Select>
                </div>

                <div className="flex-1" />

                <div className="mb-[143px]">
                    <button 
                        className="w-full h-[40px] bg-[#FFD700] text-black rounded-[10px] font-medium text-[17px]"
                        onClick={handleOpenDepositModal}
                    >
                        Deposit
                    </button>
                </div>
            </div>

            <DepositModal 
                isOpen={isDepositModalOpen} 
                onClose={handleCloseDepositModal}
                description={description}
                collateral={collateral}
                protocol={protocol}
            />
        </div>
    );
}; 