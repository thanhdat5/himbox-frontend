import { toast } from "react-toastify";
import { HIMBOX_USER_ID, HIMBOX_WALLET } from "../constants";

export const getCurrentUserId = () => {
  return localStorage.getItem(HIMBOX_USER_ID);
};
export const getCurrentUserWallet = () => {
  return localStorage.getItem(HIMBOX_WALLET);
};
export const ShowSuccessMessage = (message: string) => {
  toast.success(message);
};

export const ShowErrorMessage = (e: any) => {
  if (e && e.msg) {
    toast.error(e.msg);
  } else {
    toast.error("An error occurred. Please contact your system administrator.");
  }
};
