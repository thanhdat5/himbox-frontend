import { LevelModel } from "../level";
import { RankModel } from "../rank";

export interface DashboardStatisticsResponseModel {
  balance: number;
  totalProfit: number;
  totalSales: number;
  totalValidator: number;
}
export interface DashboardLevelsResponseModel {
  packageValue: number;
  himLocked: number;
  dailyReward: number;
  currentLevel: number;
  allLevels: LevelModel[];
}

export interface DepositTransactionsResponseModel {
  transactionId: string;
  address: string;
  value: number;
  date: Date;
}
export interface UpgradeTransactionsResponseModel {
  transactionId: string;
  from: string;
  to: string;
  date: Date;
}
export interface WithdrawalTransactionsResponseModel {
  transactionId: string;
  day: Date;
  address: string;
  balance: number;
  txHash: string;
}
export interface DowngradeTransactionsResponseModel {
  transactionId: string;
  from: string;
  to: string;
  date: Date;
}
export interface ProfitTransactionsResponseModel {
  transactionId: string;
  invest: number;
  level: number;
  reank: string;
  date: Date;
}
export interface DashboardRanksResponseModel extends RankModel {
  isActive: boolean;
}
