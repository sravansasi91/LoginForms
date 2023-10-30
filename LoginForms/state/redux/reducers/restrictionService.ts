import {RestrictionServiceActionTypes} from '../type';

const initialState = {
  response: [],
  isLoading: false,
  status: false,
  message: null,
  error: null,
};

const restrictionService = (state = initialState, action: any) => {
  switch (action.type) {
    case RestrictionServiceActionTypes.RESTRICTION_SERVICE_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case RestrictionServiceActionTypes.RESTRICTION_SERVICE_SUCCESS: {
      const responseData = action.payload.data;

      const response = responseData.data;
      const status = responseData.status;
      const message = responseData.message;

      return {
        ...state,
        isLoading: false,
        response: response,
        status: status,
        message: message,
      };
    }
    case RestrictionServiceActionTypes.RESTRICTION_SERVICE_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default restrictionService;
