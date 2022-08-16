import { toast } from "react-toastify";
import { HIMBOX_USER_ID, HIMBOX_USER_INFO } from "../constants";

export const getCurrentUserId = () => {
  return localStorage.getItem(HIMBOX_USER_ID);
};
export const getCurrentUser = () => {
  const userLogged = localStorage.getItem(HIMBOX_USER_INFO) || "";
  return userLogged ? JSON.parse(userLogged) : null;
};
export const is2FAActive = () => {
  const userLogged = getCurrentUser();
  return userLogged.tfa || false;
};
export const ShowSuccessMessage = (message: string) => {
  toast.success(message);
};

export const ShowErrorMessage = (e: any) => {
  if (e && (e.msg || e.message)) {
    toast.error(e.msg || e.message);
  } else {
    toast.error("An error occurred. Please contact your system administrator.");
  }
};
