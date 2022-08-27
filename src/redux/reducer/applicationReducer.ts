import { SET_DOT_BALANCE, SET_LATEST_BLOCK_NUMBER, SET_USDT_BALANCE } from './../types/application';

const initialState: any = {
    dotBalance: 0,
    usdtBalance: 0,
    latestBlockNumber: 0
};

const applicationReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_LATEST_BLOCK_NUMBER:
            return {
                ...state,
                latestBlockNumber: action.payload
            };
        case SET_DOT_BALANCE:
            return {
                ...state,
                dotBalance: action.payload
            };
        case SET_USDT_BALANCE:
            return {
                ...state,
                usdtBalance: action.payload
            };
        default:
            return {
                ...state,
            };
    }
};
export default applicationReducer;
