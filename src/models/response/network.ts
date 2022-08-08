export interface NetworkStatisticsResponseModel {
  totalSales: number;
  totalMembers: number;
  totalInvestors: number;
  ranking: number;
  click: number;
  registration: number;
}
export interface NetworkMembersByLevelResponseModel {
  userId: string;
  username: string;
  idSponsor: string;
  package: number;
  himLock: number;
  rank: number;
}
