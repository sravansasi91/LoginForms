import { CommonConstant } from '../../../constants';
import {RenewalRequestCancelActionTypes} from '../type';

const initialState = {
  response: {},
  isLoading: false,
  status: false,
  message: '',
  error: null,
  code: null,
};

export default function communityReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case RenewalRequestCancelActionTypes.RENEWAL_REQUEST_CANCEL_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case RenewalRequestCancelActionTypes.RENEWAL_REQUEST_CANCEL_SUCCESS: {
      const responseData = action.payload.data;
      const response = responseData.data;
      const status = responseData.status;
      const message = responseData.message;
      const code = responseData.code;
      return {
        ...state,
        isLoading: false,
        response: response,
        status: status,
        message: message,
        code: code,
      };
    }

    case RenewalRequestCancelActionTypes.RENEWAL_REQUEST_CANCEL_RESET: 
    return {
      ...state,
      isLoading: false,
      status: false,
      message: CommonConstant.EMPTY_STRING,
      error: null,
      code: null,
    };

    case RenewalRequestCancelActionTypes.RENEWAL_REQUEST_CANCEL_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
