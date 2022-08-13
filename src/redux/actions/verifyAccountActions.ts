import { VERIFY_ACCOUNT_FAILURE, VERIFY_ACCOUNT_SUCCESS } from './../types/verifyAccount';
import { VerifyAccountRequestModel } from './../../models/request/verify-password';
import {
    VerifyCodeRequestModel
} from "../../models";
import {
    SendVerifyCodeFailure,
    SendVerifyCodeRequest,
    SendVerifyCodeSuccess,
    SEND_VERIFY_CODE_FAILURE,
    SEND_VERIFY_CODE_REQUEST,
    SEND_VERIFY_CODE_SUCCESS
} from "../types/forgotPassword";
import { VerifyAccountFailure, VerifyAccountRequest, VerifyAccountSuccess, VERIFY_ACCOUNT_REQUEST } from '../types/verifyAccount';

export const sendVerifyCodeRequest = (
    payload: VerifyCodeRequestModel
): SendVerifyCodeRequest => ({
    type: SEND_VERIFY_CODE_REQUEST,
    payload,
});

export const sendVerifyCodeSuccess = (): SendVerifyCodeSuccess => ({
    type: SEND_VERIFY_CODE_SUCCESS,
});

export const sendVerifyCodeFailure = (): SendVerifyCodeFailure => ({
    type: SEND_VERIFY_CODE_FAILURE,
});

export const verifyAccountRequest = (
    payload: VerifyAccountRequestModel
): VerifyAccountRequest => ({
    type: VERIFY_ACCOUNT_REQUEST,
    payload,
});

export const verifyAccountSuccess = (): VerifyAccountSuccess => ({
    type: VERIFY_ACCOUNT_SUCCESS,
});

export const verifyAccountFailure = (): VerifyAccountFailure => ({
    type: VERIFY_ACCOUNT_FAILURE,
});
