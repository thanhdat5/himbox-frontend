export interface LoginRequestModel {
  username: string;
  password: string;
  remember?: boolean;
  tfa_code?: string;
}
