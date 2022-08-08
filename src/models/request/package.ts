import { IRequest } from "./IRequest";

export interface PackageStatisticsRequestModel extends IRequest {
  
}
export interface PackageByProfitRequestModel extends IRequest {
    profit: number;
}
export interface ConfirmParticipateRequestModel extends IRequest {
    packageId: string;
}