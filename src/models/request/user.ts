import { IRequest } from "./IRequest";

export interface UserInfoRequestModel extends IRequest {}
export interface UserUpdateInforRequestModel extends IRequest {
  walletAddress: string;
  email: string;
}
export interface UserChangePasswordRequestModel extends IRequest {
  currentPassword: string;
  newPassword: string;
}
export interface UserEnable2FARequestModel extends IRequest {
  enable2FA: boolean;
  productKey: string;
  verifyCode: string;
}
