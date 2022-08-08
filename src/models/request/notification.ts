import { IRequest } from "./IRequest";

export interface NotificationRequestModel extends IRequest {
}
export interface NotificationMarkRequestModel extends IRequest {
    notificationIds: string[];
}
