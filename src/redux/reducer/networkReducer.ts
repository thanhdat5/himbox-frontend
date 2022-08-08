import {
  GET_NETWORK_STATISTICS_REQUEST,
  GET_NETWORK_STATISTICS_SUCCESS,
  GET_NETWORK_STATISTICS_FAILURE,
  GET_MEMBERS_BY_LEVEL_REQUEST,
  GET_MEMBERS_BY_LEVEL_SUCCESS,
  GET_MEMBERS_BY_LEVEL_FAILURE,
  NetworkActions,
  NetworkState,
} from "../types/network";

const initialState: NetworkState = {
  loadingStatistics: false,
  loadingMembers: false,
  statistics: null,
  members: []
};

const networkReducer = (state = initialState, action: NetworkActions) => {
  switch (action.type) {
    case GET_NETWORK_STATISTICS_REQUEST:
      return {
        ...state,
        loadingStatistics: true,
        statistics: null,
      };
    case GET_NETWORK_STATISTICS_SUCCESS:
      return {
        ...state,
        loadingStatistics: false,
        statistics: action.payload,
      };
    case GET_NETWORK_STATISTICS_FAILURE:
      return {
        ...state,
        loadingStatistics: false,
        statistics: null,
      };
    case GET_MEMBERS_BY_LEVEL_REQUEST:
      return {
        ...state,
        loadingMembers: true,
        members: [],
      };
    case GET_MEMBERS_BY_LEVEL_SUCCESS:
      return {
        ...state,
        loadingMembers: false,
        members: action.payload,
      };
    case GET_MEMBERS_BY_LEVEL_FAILURE:
      return {
        ...state,
        loadingMembers: false,
        members: [],
      };

    default:
      return {
        ...state,
      };
  }
};
export default networkReducer;
