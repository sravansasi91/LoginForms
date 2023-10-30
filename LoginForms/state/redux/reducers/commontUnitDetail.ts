import { CommonConstant } from '../../../constants';
import {CommonUnitDetailActionTypes} from '../type';

const initialState = {
  response: {},
  isLoading: false,
  status: false,
  message: '',
  error: null,
  code: null,
};

export default function commonUnitDetail(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case CommonUnitDetailActionTypes.UNIT_DETAIL_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case CommonUnitDetailActionTypes.UNIT_DETAIL_SUCCESS: {
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

    case CommonUnitDetailActionTypes.UNIT_DETAIL_RESET: 
    return {
      ...state,
      response: {},
      isLoading: false,
      status: false,
      message: CommonConstant.EMPTY_STRING,
      error: null,
      code: null,
    };
    
    case CommonUnitDetailActionTypes.UNIT_DETAIL_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
