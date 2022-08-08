import { IRequest } from "./IRequest";

export interface WithdrawRequestModel extends IRequest {
  amount: number;
  toAddress: string;
  password: string;
}
