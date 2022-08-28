import { GET_HIM_SALE_CONFIGS_SUCCESS, GET_HIM_SALE_INFO_SUCCESS, GET_HIM_SALE_USER_INFO_SUCCESS } from '../types/himPool';

const initialState: any = {
    himPoolConfig: null,
    himSaleInfo: null,
    himSaleUserInfo: null
};

const himPoolReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_HIM_SALE_CONFIGS_SUCCESS:
            return {
                ...state,
                himPoolConfig: action.payload
            };
        case GET_HIM_SALE_INFO_SUCCESS:
            return {
                ...state,
                himSaleInfo: action.payload
            };
        case GET_HIM_SALE_USER_INFO_SUCCESS:
            return {
                ...state,
                himSaleUserInfo: action.payload
            };
        default:
            return {
                ...state,
            };
    }
};
export default himPoolReducer;
