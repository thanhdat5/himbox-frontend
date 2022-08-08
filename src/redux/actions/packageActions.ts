import {
  ConfirmParticipateRequestModel,
  PackageByProfitRequestModel,
  PackageByProfitResponseModel,
  PackageStatisticsRequestModel,
  PackageStatisticsResponseModel
} from "../../models";
import {
  ConfirmParticipateFailure,
  ConfirmParticipateRequest,
  ConfirmParticipateSuccess,
  CONFIRM_PARTICIPATE_FAILURE,
  CONFIRM_PARTICIPATE_REQUEST,
  CONFIRM_PARTICIPATE_SUCCESS,
  GetPackagesByProfitFailure,
  GetPackagesByProfitRequest,
  GetPackagesByProfitSuccess,
  GetPackageStatisticsFailure,
  GetPackageStatisticsRequest,
  GetPackageStatisticsSuccess,
  GET_PACKAGES_BY_PROFIT_FAILURE,
  GET_PACKAGES_BY_PROFIT_REQUEST,
  GET_PACKAGES_BY_PROFIT_SUCCESS,
  GET_PACKAGE_STATISTICS_FAILURE,
  GET_PACKAGE_STATISTICS_REQUEST,
  GET_PACKAGE_STATISTICS_SUCCESS
} from "../types/package";

export const getPackageStatisticsRequest = (
  payload: PackageStatisticsRequestModel
): GetPackageStatisticsRequest => ({
  type: GET_PACKAGE_STATISTICS_REQUEST,
  payload,
});

export const getPackageStatisticsSuccess = (
  payload: PackageStatisticsResponseModel
): GetPackageStatisticsSuccess => ({
  type: GET_PACKAGE_STATISTICS_SUCCESS,
  payload,
});

export const getPackageStatisticsFailure = (): GetPackageStatisticsFailure => ({
  type: GET_PACKAGE_STATISTICS_FAILURE,
});

export const getPackagesByProfitRequest = (
  payload: PackageByProfitRequestModel
): GetPackagesByProfitRequest => ({
  type: GET_PACKAGES_BY_PROFIT_REQUEST,
  payload,
});

export const getPackagesByProfitSuccess = (
  payload: PackageByProfitResponseModel[]
): GetPackagesByProfitSuccess => ({
  type: GET_PACKAGES_BY_PROFIT_SUCCESS,
  payload,
});

export const getPackagesByProfitFailure = (): GetPackagesByProfitFailure => ({
  type: GET_PACKAGES_BY_PROFIT_FAILURE,
});

export const confirmParticipateRequest = (
  payload: ConfirmParticipateRequestModel
): ConfirmParticipateRequest => ({
  type: CONFIRM_PARTICIPATE_REQUEST,
  payload,
});

export const confirmParticipateSuccess = (): ConfirmParticipateSuccess => ({
  type: CONFIRM_PARTICIPATE_SUCCESS,
});

export const confirmParticipateFailure = (): ConfirmParticipateFailure => ({
  type: CONFIRM_PARTICIPATE_FAILURE,
});
