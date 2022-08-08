import { IRequest } from "./IRequest";

export interface NetworkStatisticsRequestModel extends IRequest {
  
}
export interface NetworkMembersByLevelRequestModel extends IRequest {
    level: number;
    memberId?: string;
}