export interface CreateWithdrawRequestModel {
  amount: number;
  to: string;
}

export interface ConfirmWithdrawRequestModel {
  withdraw_id?: string;
  tfa_code: string;
  password: string;
  number_verify: string;
}

export interface CancelWithdrawRequestModel {
  withdraw_id: string;
}