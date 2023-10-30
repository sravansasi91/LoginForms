import { CommonConstant } from '../../../constants/CommonConstant';
import {MoveInDetailActionTypes} from '../type';

const initialState = {
  response: {},
  isLoading: false,
  status: false,
  message: '',
  error: null,
  code: null,
};

export default function reducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case MoveInDetailActionTypes.MOVE_IN_DETAIL_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case MoveInDetailActionTypes.MOVE_IN_DETAIL_SUCCESS: {
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

    case MoveInDetailActionTypes.MOVE_IN_DETAIL_RESET: 
    return {
      ...state,
      isLoading: false,
      status: false,
      message: CommonConstant.EMPTY_STRING,
      error: null,
      code: null,
    };
    
    case MoveInDetailActionTypes.MOVE_IN_DETAIL_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
