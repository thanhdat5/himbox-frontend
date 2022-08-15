import { toast } from "react-toastify";
import { HIMBOX_USER_ID } from "../constants";

export const getCurrentUserId = ()=>{
    return  localStorage.getItem(HIMBOX_USER_ID);
}
export const ShowSuccessMessage = (message: string) => {
    toast.success(message);
};

export const ShowErrorMessage = (e: any) => {
    if(e && e.message){
        toast.error(e.message);
    }else{
        toast.error('An error occurred. Please contact your system administrator.');
    }
};
