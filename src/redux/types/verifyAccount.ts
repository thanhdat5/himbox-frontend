import {
    VerifyAccountRequestModel,
} from "../../models";

export const VERIFY_ACCOUNT_REQUEST = "VERIFY_ACCOUNT_REQUEST";
export const VERIFY_ACCOUNT_SUCCESS = "VERIFY_ACCOUNT_SUCCESS";
export const VERIFY_ACCOUNT_FAILURE = "VERIFY_ACCOUNT_FAILURE";

export interface VerifyAccountRequest {
    type: typeof VERIFY_ACCOUNT_REQUEST;
    payload: VerifyAccountRequestModel;
}

export type VerifyAccountSuccess = {
    type: typeof VERIFY_ACCOUNT_SUCCESS;
};

export type VerifyAccountFailure = {
    type: typeof VERIFY_ACCOUNT_FAILURE;
};

export type ForgotPasswordActions =
    | VerifyAccountRequest
    | VerifyAccountSuccess
    | VerifyAccountFailure
