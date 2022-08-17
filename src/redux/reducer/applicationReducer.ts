import { SET_DOT_BALANCE, SET_LATEST_BLOCK_NUMBER } from './../types/application';

const initialState: any = {
    dotBalance: 0,
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
        default:
            return {
                ...state,
            };
    }
};
export default applicationReducer;
