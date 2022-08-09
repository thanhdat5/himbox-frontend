import { toast } from "react-toastify";

export const getCurrentUserId = ()=>{
    return '111';
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
