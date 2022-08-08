import {
  GET_PACKAGE_STATISTICS_REQUEST,
  GET_PACKAGE_STATISTICS_SUCCESS,
  GET_PACKAGE_STATISTICS_FAILURE,
  GET_PACKAGES_BY_PROFIT_REQUEST,
  GET_PACKAGES_BY_PROFIT_SUCCESS,
  GET_PACKAGES_BY_PROFIT_FAILURE,
  CONFIRM_PARTICIPATE_REQUEST,
  CONFIRM_PARTICIPATE_SUCCESS,
  CONFIRM_PARTICIPATE_FAILURE,
  PackageActions,
  PackageState,
} from "../types/package";

const initialState: PackageState = {
  loading: false,
  statistics: null,
  packages: [],
  confirmSuccess: false,
};

const packageReducer = (state = initialState, action: PackageActions) => {
  switch (action.type) {
    case GET_PACKAGE_STATISTICS_REQUEST:
      return {
        ...state,
        loading: true,
        statistics: null,
      };
    case GET_PACKAGE_STATISTICS_SUCCESS:
      return {
        ...state,
        loading: false,
        statistics: action.payload,
      };
    case GET_PACKAGE_STATISTICS_FAILURE:
      return {
        ...state,
        loading: false,
        statistics: null,
      };
    case GET_PACKAGES_BY_PROFIT_REQUEST:
      return {
        ...state,
        loading: true,
        packages: [],
      };
    case GET_PACKAGES_BY_PROFIT_SUCCESS:
      return {
        ...state,
        loading: false,
        packages: action.payload,
      };
    case GET_PACKAGES_BY_PROFIT_FAILURE:
      return {
        ...state,
        loading: false,
        packages: [],
      };

    case CONFIRM_PARTICIPATE_REQUEST:
      return {
        ...state,
        loading: true,
        confirmSuccess: false,
      };
    case CONFIRM_PARTICIPATE_SUCCESS:
      return {
        ...state,
        loading: false,
        confirmSuccess: true,
      };
    case CONFIRM_PARTICIPATE_FAILURE:
      return {
        ...state,
        loading: false,
        confirmSuccess: false,
      };

    default:
      return {
        ...state,
      };
  }
};
export default packageReducer;
