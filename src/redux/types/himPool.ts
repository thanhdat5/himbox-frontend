export const GET_HIM_SALE_CONFIGS_REQUEST = 'GET_HIM_SALE_CONFIGS_REQUEST';
export const GET_HIM_SALE_CONFIGS_SUCCESS = 'GET_HIM_SALE_CONFIGS_SUCCESS';
export const GET_HIM_SALE_CONFIGS_FAIL = 'GET_HIM_SALE_CONFIGS_FAIL';

export const GET_HIM_SALE_INFO_REQUEST = 'GET_HIM_SALE_INFO_REQUEST';
export const GET_HIM_SALE_INFO_SUCCESS = 'GET_HIM_SALE_INFO_SUCCESS';
export const GET_HIM_SALE_INFO_FAIL = 'GET_HIM_SALE_INFO_FAIL';

export const GET_HIM_SALE_USER_INFO_REQUEST = 'GET_HIM_SALE_USER_INFO_REQUEST';
export const GET_HIM_SALE_USER_INFO_SUCCESS = 'GET_HIM_SALE_USER_INFO_SUCCESS';
export const GET_HIM_SALE_USER_INFO_FAIL = 'GET_HIM_SALE_USER_INFO_FAIL';

export type GetHimPoolRequest = {
    type: typeof GET_HIM_SALE_CONFIGS_REQUEST;
};
export type GetHimPoolSuccess = {
    type: typeof GET_HIM_SALE_CONFIGS_SUCCESS;
};
export type GetHimPoolFail = {
    type: typeof GET_HIM_SALE_CONFIGS_FAIL;
};

export type GetHimPoolInfoRequest = {
    type: typeof GET_HIM_SALE_INFO_REQUEST;
};
export type GetHimPoolInfoSuccess = {
    type: typeof GET_HIM_SALE_INFO_SUCCESS;
};
export type GetHimPoolInfoFail = {
    type: typeof GET_HIM_SALE_INFO_FAIL;
};

export type GetHimSaleUserInfoRequest = {
    type: typeof GET_HIM_SALE_USER_INFO_REQUEST;
};
export type GetHimSaleUserInfoSuccess = {
    type: typeof GET_HIM_SALE_USER_INFO_SUCCESS;
};
export type GetHimSaleUserInfoFail = {
    type: typeof GET_HIM_SALE_USER_INFO_FAIL;
};

export type HimPoolActions =
    | GetHimPoolRequest
    | GetHimPoolSuccess
    | GetHimPoolFail
    | GetHimPoolInfoRequest
    | GetHimPoolInfoSuccess
    | GetHimPoolInfoFail
    | GetHimSaleUserInfoRequest
    | GetHimSaleUserInfoSuccess
    | GetHimSaleUserInfoFail;