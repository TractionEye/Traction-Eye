import { FC, useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { MyStrategy } from './components/MyStrategy';
import { Leaderboard } from './components/Leaderboard';

export const SocialTradePage: FC = () => {
    const [tabValue, setTabValue] = useState(1);
    const navigate = useNavigate();

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleMyStrategyClick = () => {
        setTabValue(1);
    };

    return (
        <div className="min-h-screen" style={{ 
            background: 'linear-gradient(60deg, #494433 0%, #000 35%, #000 65%, #494433 100%)'
        }}>
            <div className="flex items-center px-4 py-3 bg-transparent">
                <button 
                    onClick={() => navigate(-1)}
                    className="text-[#3B82F6] text-lg"
                >
                    Back
                </button>
                <div className="flex-1 text-center">
                    <h1 className="text-white text-lg font-medium">TractionEye</h1>
                    <p className="text-gray-400 text-sm">Mini App</p>
                </div>
                <button className="text-[#3B82F6] text-2xl">⋯</button>
            </div>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                    value={tabValue} 
                    onChange={handleTabChange}
                    variant="fullWidth"
                    sx={{
                        background: 'linear-gradient(90deg, #2E2E2E 0%, #33332E 50%, #494433 100%)',
                        '& .MuiTab-root': {
                            color: '#9CA3AF',
                            textTransform: 'none',
                            fontSize: '16px',
                        },
                        '& .Mui-selected': {
                            color: '#FFD700 !important',
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#FFD700',
                        }
                    }}
                >
                    <Tab label="Leaderboard" />
                    <Tab label="My Strategies" />
                </Tabs>
            </Box>

            {tabValue === 0 && <Leaderboard handleMyStrategyClick={handleMyStrategyClick} />}
            {tabValue === 1 && <MyStrategy />}
        </div>
    );
};

export default SocialTradePage;
