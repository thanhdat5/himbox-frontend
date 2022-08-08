export interface VerifyCodeRequestModel{
    email: string;
    type: 'forgot-password' | 'enable-2fa';
}
export interface RecoverPasswordRequestModel{
    email: string;
    verifyCode: string;
}