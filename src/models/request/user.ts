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
  token: string;
}
export interface UserGenerate2FARequestModel{
}

