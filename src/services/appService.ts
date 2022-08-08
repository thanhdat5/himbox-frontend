import { toast } from "react-toastify";

export const ShowErrorMessage = (e: any) => {
    if(e && e.message){
        toast.error(e.message);
    }else{
        toast.error('An error occurred. Please contact your system administrator.');
    }
};
