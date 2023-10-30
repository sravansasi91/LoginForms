import {MoveOutRequestCancelActionTypes} from '../type';

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
    case MoveOutRequestCancelActionTypes.MOVE_OUT_REQUEST_CANCEL_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case MoveOutRequestCancelActionTypes.MOVE_OUT_REQUEST_CANCEL_SUCCESS: {
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
    case MoveOutRequestCancelActionTypes.MOVE_OUT_REQUEST_CANCEL_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
