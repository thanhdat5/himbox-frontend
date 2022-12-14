import {
  ConfirmParticipateRequestModel,
  PackageByProfitRequestModel,
  PackageByProfitResponseModel,
  PackageStatisticsResponseModel
} from "../../models";

export const GET_PACKAGE_STATISTICS_REQUEST = "GET_PACKAGE_STATISTICS_REQUEST";
export const GET_PACKAGE_STATISTICS_SUCCESS = "GET_PACKAGE_STATISTICS_SUCCESS";
export const GET_PACKAGE_STATISTICS_FAILURE = "GET_PACKAGE_STATISTICS_FAILURE";

export const GET_MY_PACKAGE_REQUEST = "GET_MY_PACKAGE_REQUEST";
export const GET_MY_PACKAGE_SUCCESS = "GET_MY_PACKAGE_SUCCESS";
export const GET_MY_PACKAGE_FAILURE = "GET_MY_PACKAGE_FAILURE";

export const GET_PACKAGES_BY_PROFIT_REQUEST = "GET_PACKAGES_BY_PROFIT_REQUEST";
export const GET_PACKAGES_BY_PROFIT_SUCCESS = "GET_PACKAGES_BY_PROFIT_SUCCESS";
export const GET_PACKAGES_BY_PROFIT_FAILURE = "GET_PACKAGES_BY_PROFIT_FAILURE";

export const CONFIRM_PARTICIPATE_REQUEST = "CONFIRM_PARTICIPATE_REQUEST";
export const CONFIRM_PARTICIPATE_SUCCESS = "CONFIRM_PARTICIPATE_SUCCESS";
export const CONFIRM_PARTICIPATE_FAILURE = "CONFIRM_PARTICIPATE_FAILURE";

export const GET_HIMBOX_PRICE = 'GET_HIMBOX_PRICE';

export interface PackageState {
  loading: boolean;
  statistics: PackageStatisticsResponseModel | null;
  packages: PackageByProfitResponseModel[];
  confirmSuccess: boolean;
  price?: any
}

export interface GetPackageStatisticsRequest {
  type: typeof GET_PACKAGE_STATISTICS_REQUEST;
}

export type GetPackageStatisticsSuccess = {
  type: typeof GET_PACKAGE_STATISTICS_SUCCESS;
  payload: PackageStatisticsResponseModel;
};

export type GetPackageStatisticsFailure = {
  type: typeof GET_PACKAGE_STATISTICS_FAILURE;
};

export interface GetMyPackageRequest_ {
  type: typeof GET_MY_PACKAGE_REQUEST;
  payload: any;
}

export type GetMyPackageSuccess = {
  type: typeof GET_MY_PACKAGE_SUCCESS;
  payload: any;
};

export type GetMyPackageFailure = {
  type: typeof GET_MY_PACKAGE_FAILURE;
};

export interface GetPackagesByProfitRequest {
  type: typeof GET_PACKAGES_BY_PROFIT_REQUEST;
  payload: PackageByProfitRequestModel;
}

export type GetPackagesByProfitSuccess = {
  type: typeof GET_PACKAGES_BY_PROFIT_SUCCESS;
  payload: PackageByProfitResponseModel[];
};

export type GetPackagesByProfitFailure = {
  type: typeof GET_PACKAGES_BY_PROFIT_FAILURE;
};

export interface ConfirmParticipateRequest {
  type: typeof CONFIRM_PARTICIPATE_REQUEST;
  payload: ConfirmParticipateRequestModel;
}

export type ConfirmParticipateSuccess = {
  type: typeof CONFIRM_PARTICIPATE_SUCCESS;
};

export type ConfirmParticipateFailure = {
  type: typeof CONFIRM_PARTICIPATE_FAILURE;
};

export type FetchHimboxPrice = {
  type: typeof GET_HIMBOX_PRICE;
  payload: any
};

export type PackageActions =
  | GetPackageStatisticsRequest
  | GetPackageStatisticsSuccess
  | GetPackageStatisticsFailure
  | GetMyPackageRequest_
  | GetMyPackageSuccess
  | GetMyPackageFailure
  | GetPackagesByProfitRequest
  | GetPackagesByProfitSuccess
  | GetPackagesByProfitFailure
  | ConfirmParticipateRequest
  | ConfirmParticipateSuccess
  | FetchHimboxPrice
  | ConfirmParticipateFailure;
