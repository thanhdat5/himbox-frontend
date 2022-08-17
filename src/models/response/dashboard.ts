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
  _id: string;
  address: string;
  value: number;
  date: Date;
}
export interface UpgradeTransactionsResponseModel {
  _id: string;
  from: string;
  to: string;
  date: Date;
}
export interface WithdrawalTransactionsResponseModel {
  _id: string;
  day: Date;
  address: string;
  balance: number;
  txHash: string;
}
export interface DowngradeTransactionsResponseModel {
  _id: string;
  from: string;
  to: string;
  date: Date;
}
export interface ProfitTransactionsResponseModel {
  _id: string;
  invest: number;
  level: number;
  reank: string;
  date: Date;
}
export interface DashboardRanksResponseModel extends RankModel {
  isActive: boolean;
}
