import { CommonConstant } from '../../../constants';
import {OwnerCreateActionTypes} from '../type';

const initialState = {
  response: {},
  isLoading: false,
  status: false,
  message: '',
  error: null,
  code: null,
};

export default function ownerCreateReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case OwnerCreateActionTypes.OWNER_CREATE_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case OwnerCreateActionTypes.OWNER_CREATE_SUCCESS: {
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

    case OwnerCreateActionTypes.OWNER_CREATE_RESET: 
    return {
      ...state,
      isLoading: false,
      status: false,
      message: CommonConstant.EMPTY_STRING,
      error: null,
      code: null,
    };
    
    case OwnerCreateActionTypes.OWNER_CREATE_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return initialState;
  }
}
