export interface UserInfoResponseModel {
  userId: string;
  walletAddress: string;
  email: string;
  enable2FA: boolean;
  productKey: string;
  verifyCode: string;
}
export interface UserEnable2FAResponseModel{
  path: string;
  remaining: number;
  stringQR: string;
}