import { FC } from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import { Box } from '@mui/material';
import { LeaderboardCard } from './LeaderboardCard';
import { TraderData } from './types';

const generateTestData = (count: number): TraderData[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index,
    username: `trader${index}`,
    roi: Math.random() * 100 - 50, // от -50% до +50%
    days: Math.floor(Math.random() * 30) + 1,
    profit: Math.random() * 10000 - 5000, // от -5000 до +5000
    chartData: Array.from({ length: 40 }, () => ({
      value: Math.random() * 100
    }))
  }));
};

const testData = generateTestData(100);

export const Leaderboard: FC<{ handleMyStrategyClick: () => void }> = ({ handleMyStrategyClick }) => {
  const rowRenderer = ({ index, style }: ListChildComponentProps) => {
    const item = testData[index];
    
    return (
      <div style={{ ...style, padding: '0 20px 20px' }}>
        <LeaderboardCard trader={item} handleMyStrategyClick={handleMyStrategyClick} index={index} />
      </div>
    );
  };

  return (
    <Box className="h-full w-full pt-[20px]">
      <List
        width="100%"
        height={800}
        itemCount={testData.length}
        itemSize={120} // 100px высота + 20px отступ снизу
      >
        {rowRenderer}
      </List>
    </Box>
  );
}; 