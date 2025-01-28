import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import MyStrategyIcon from '@/assets/images/MyStrategyIcon.png';
import { WarningIcon } from '@/components/icons';

export const MyStrategy: FC = () => {
    const navigate = useNavigate();

    const handleCreateStrategy = () => {
        navigate('/social-trade/create-strategy');
    };

    return (
        <div className="flex flex-col items-center px-5 text-center">
            <div>
                <img 
                    src={MyStrategyIcon}
                    alt="Strategy Icon" 
                    width={98} 
                    height={98}
                    className="my-[20px]"
                />
            </div>
            <h2 className="text-white text-2xl font-bold mb-10 px-2">
                Hi! You haven&apos;t started using trader strategies yet
            </h2>
            <div className="text-left w-full mb-10 px-2">
                <h3 className="text-white text-xl mb-4">
                    Experienced trader?
                </h3>
                <div className="text-white mb-4 flex ml-[10px]">
                    <span className="mr-2">•</span>
                    <p>Create a strategy and earn from fees for profitably managing others&apos; capital.</p>
                </div>
                <div className="bg-[#FFD700]/10 border border-[#FFD700] rounded-lg py-2 px-[10px] flex items-center w-[266px]">
                    <WarningIcon size={20} />
                    <p className="text-[#FFD700] text-[10px] ml-[5px]">
                        Once a strategy is created, a trader will not be able to follow other strategies
                    </p>
                </div>
            </div>
            <button 
                className="w-full bg-[#FFD700] text-black py-2 rounded-lg font-medium h-[40px]"
                onClick={handleCreateStrategy}
            >
                Create strategy
            </button>
        </div>
    );
}; 