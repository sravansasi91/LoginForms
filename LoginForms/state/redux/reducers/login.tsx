import {LoginActionTypes} from '../type';

const initialState = {
  response: {},
  isLoading: false,
  status: false,
  message: null,
  error: null,
  code: null,
};

export default function reducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case LoginActionTypes.LOGIN_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case LoginActionTypes.LOGIN_SUCCESS: {
      const responseData = action.payload.data;
      const response = responseData.data;
      const status = responseData.status;
      const message = responseData.message;
      const code = responseData.code;
      return {
        ...initialState,
        isLoading: false,
        response: response,
        status: status,
        message: message,
        code: code,
      };
    }
    case LoginActionTypes.LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return initialState;
  }
}
