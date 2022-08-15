import {
  NetworkMembersByLevelRequestModel,
  NetworkMembersByLevelResponseModel,
  NetworkStatisticsResponseModel
} from "../../models";

import {
  GetMembersByLevelFailure,
  GetMembersByLevelRequest,
  GetMembersByLevelSuccess,
  GetNetworkStatisticsFailure,
  GetNetworkStatisticsRequest,
  GetNetworkStatisticsSuccess,
  GET_MEMBERS_BY_LEVEL_FAILURE,
  GET_MEMBERS_BY_LEVEL_REQUEST,
  GET_MEMBERS_BY_LEVEL_SUCCESS,
  GET_NETWORK_STATISTICS_FAILURE,
  GET_NETWORK_STATISTICS_REQUEST,
  GET_NETWORK_STATISTICS_SUCCESS
} from "../types/network";

export const getNetworkStatisticsRequest = (): GetNetworkStatisticsRequest => ({
  type: GET_NETWORK_STATISTICS_REQUEST,
});

export const getNetworkStatisticsSuccess = (
  payload: NetworkStatisticsResponseModel
): GetNetworkStatisticsSuccess => ({
  type: GET_NETWORK_STATISTICS_SUCCESS,
  payload,
});

export const getNetworkStatisticsFailure = (): GetNetworkStatisticsFailure => ({
  type: GET_NETWORK_STATISTICS_FAILURE,
});

export const getMembersByLevelRequest = (
  payload: NetworkMembersByLevelRequestModel
): GetMembersByLevelRequest => ({
  type: GET_MEMBERS_BY_LEVEL_REQUEST,
  payload,
});

export const getMembersByLevelSuccess = (
  payload: NetworkMembersByLevelResponseModel[]
): GetMembersByLevelSuccess => ({
  type: GET_MEMBERS_BY_LEVEL_SUCCESS,
  payload,
});

export const getMembersByLevelFailure = (): GetMembersByLevelFailure => ({
  type: GET_MEMBERS_BY_LEVEL_FAILURE
});
