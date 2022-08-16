export interface UserInfoRequestModel {}
export interface UserUpdateInforRequestModel {
  walletAddress: string;
  email: string;
}
export interface UserChangePasswordRequestModel{
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}
export interface UserEnable2FARequestModel{
  enable2FA: boolean;
  productKey: string;
  verifyCode: string;
}
export interface UserGenerate2FARequestModel{
}

