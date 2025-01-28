import { FC } from 'react';
import { Card, Typography, Box, Avatar, IconButton } from '@mui/material';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { TraderData } from './types';
import socialAvatar from './socialAvatar.png';
import { ThinArrowIcon, TradersIcon, UsdtIcon } from '@/components/icons';
import { CupIcon } from './icons/CupIcon';
import StormTrade from "./icons/StormTrade.png"

interface Props {
  trader: TraderData;
  handleMyStrategyClick: () => void;
}

export const LeaderboardCard: FC<Props> = ({ trader, handleMyStrategyClick }) => {
  const isPositive = trader.roi > 0;
  const roiColor = isPositive ? 'text-[#16A34A]' : 'text-red-500';
  const profitFormatted = (isPositive ? '+' : '-') + new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(Math.abs(trader.profit));

  return (
      <Card 
        className="w-full h-[100px] relative border border-[#FFD235]" 
        sx={{ 
          background: 'transparent',
          borderRadius: '16px'
        }}
      >
        <Box className="p-[12px_10px] h-[100px] flex items-center">
          <Box className="flex w-[130px]">
            <Box className="relative">
              <Avatar sx={{ height: "30px", width: "30px", marginRight: "4px", backgroundColor: "transparent" }}>
                <img src={socialAvatar} />
              </Avatar>
              <Box className="absolute" sx={{ top: '20px', right: '3px' }}>
                <CupIcon size={15} />
              </Box>
            </Box>
            
            <Box className="ml-1 flex flex-col">
              <Typography sx={{ fontSize: 14, whiteSpace: 'nowrap', marginBottom: '6px', color: "#fff" }}>
                {trader.username}
              </Typography>
              <Typography className="text-gray-500" sx={{ fontSize: 10, whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', color: "#9CA3AF"}}>
                ROI <span className="
                  h-[13px]
                  w-[26px]
                  ml-[5px]
                  rounded-[5px]
                  text-[10px]
                  border
                  border-[#707579]
                  color-[#9CA3AF]
                  flex
                  items-center
                  justify-center
                ">{trader.days}d</span>
              </Typography>
              <Typography className={roiColor} sx={{ fontSize: 14, whiteSpace: 'nowrap' }}>
                {isPositive ? '+' : ''}{trader.roi.toFixed(2)}%
              </Typography>
              <Typography sx={{ fontSize: 10, whiteSpace: 'nowrap', color: "#fff" }}>
                {profitFormatted}
              </Typography>
            </Box>
            <Box className="flex h-[21px] items-center">
              <TradersIcon/>
              <Typography sx={{ fontSize: 10, whiteSpace: 'nowrap', marginLeft: '2px', color: '#9CA3AF' }}>54</Typography>
            </Box>

          </Box>
          
          <Box className="ml-[38px] flex-1" style={{ maxWidth: '105px' }}>
            <ResponsiveContainer width="100%" height={76}>
              <LineChart data={trader.chartData}>
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke={isPositive ? '#22c55e' : '#ef4444'}
                  strokeWidth={1.5}
                  dot={false}
                  isAnimationActive={false}
                  activeDot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>

          <Box className="absolute bottom-3 right-3 flex gap-2">
            <img src={StormTrade} alt="Storm Trade" className="w-[26px] h-[26px]" />
            <UsdtIcon />
          </Box>
          <IconButton 
            sx={{
              position: 'absolute',
              top: '6px',
              right: '6px',
              '&:hover': {
                opacity: 0.8,
                backgroundColor: 'transparent'
              }
            }}
            onClick={() => {
              // здесь обработчик клика
              handleMyStrategyClick();
            }}
          >
            <ThinArrowIcon color="#FFD235"/>
          </IconButton>
        </Box>
      </Card>
  );
}; 