import {
  NetworkMembersByLevelRequestModel, NetworkMembersByLevelResponseModel, NetworkStatisticsRequestModel, NetworkStatisticsResponseModel
} from "../../models";

export const GET_NETWORK_STATISTICS_REQUEST = "GET_NETWORK_STATISTICS_REQUEST";
export const GET_NETWORK_STATISTICS_SUCCESS = "GET_NETWORK_STATISTICS_SUCCESS";
export const GET_NETWORK_STATISTICS_FAILURE = "GET_NETWORK_STATISTICS_FAILURE";

export const GET_MEMBERS_BY_LEVEL_REQUEST = "GET_MEMBERS_BY_LEVEL_REQUEST";
export const GET_MEMBERS_BY_LEVEL_SUCCESS = "GET_MEMBERS_BY_LEVEL_SUCCESS";
export const GET_MEMBERS_BY_LEVEL_FAILURE = "GET_MEMBERS_BY_LEVEL_FAILURE";

export interface NetworkState {
  loadingStatistics: boolean;
  loadingMembers: boolean;
  statistics: NetworkStatisticsResponseModel | null;
  members: NetworkMembersByLevelResponseModel[];
}

export interface GetNetworkStatisticsRequest {
  type: typeof GET_NETWORK_STATISTICS_REQUEST;
  payload: NetworkStatisticsRequestModel;
}

export type GetNetworkStatisticsSuccess = {
  type: typeof GET_NETWORK_STATISTICS_SUCCESS;
  payload: NetworkStatisticsResponseModel;
};

export type GetNetworkStatisticsFailure = {
  type: typeof GET_NETWORK_STATISTICS_FAILURE;
};

export interface GetMembersByLevelRequest {
  type: typeof GET_MEMBERS_BY_LEVEL_REQUEST;
  payload: NetworkMembersByLevelRequestModel;
}

export type GetMembersByLevelSuccess = {
  type: typeof GET_MEMBERS_BY_LEVEL_SUCCESS;
  payload: NetworkMembersByLevelResponseModel[];
};

export type GetMembersByLevelFailure = {
  type: typeof GET_MEMBERS_BY_LEVEL_FAILURE;
};

export type NetworkActions =
  | GetNetworkStatisticsRequest
  | GetNetworkStatisticsSuccess
  | GetNetworkStatisticsFailure
  | GetMembersByLevelRequest
  | GetMembersByLevelSuccess
  | GetMembersByLevelFailure;
