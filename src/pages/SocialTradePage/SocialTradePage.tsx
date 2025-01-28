import { FC, useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import { MyStrategy } from './components/MyStrategy';
import { Leaderboard } from './components/Leaderboard';

export const SocialTradePage: FC = () => {
    const [tabValue, setTabValue] = useState(0);
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
                            color: '#FFD235 !important',
                        },
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#FFD235',
                            width: '110px !important',
                            marginLeft: 'calc(25% - 54px)'
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
