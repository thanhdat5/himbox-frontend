import { IRequest } from "./IRequest";

export interface DepositRequestModel extends IRequest {
  amount: number;
  referralId?: string;
  password: string;
}
