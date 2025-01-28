interface ChartDataPoint {
  value: number;
}

export interface TraderData {
    id: number;
    username: string;
    roi: number;
    days: number;
    profit: number;
    chartData: ChartDataPoint[];
  }