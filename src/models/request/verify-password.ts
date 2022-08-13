export interface VerifyAccountRequestModel{
    username: string;
    user_id: string;
    numberVerify: number | string;
    lang?: string
}