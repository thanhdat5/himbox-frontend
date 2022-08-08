export interface PackageStatisticsResponseModel {
  packageName: string;
  packageValue: number;
  himLock: number;
  planName: string;
  profit: number;
}
export interface PackageByProfitResponseModel {
  packageId: string;
  packageName: string;
  packageValue: number;
  planName: string;
  himLock: number;
  dotLock: number;
  total: number;
  totalUSD: number;
}
