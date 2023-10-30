import {NewPasswordActionTypes} from '../type';

const initialState = {
  response: {},
  isLoading: false,
  status: false,
  message: null,
  error: null,
  email: null,
  forgotPasswordNavigation: false,
  code: null,
};

export default function reducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case NewPasswordActionTypes.NEW_PASSWORD_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case NewPasswordActionTypes.NEW_PASSWORD_SUCCESS: {
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
        forgotPasswordNavigation: true,
        code: code,
      };
    }
    case NewPasswordActionTypes.NEW_PASSWORD_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return initialState;
  }
}
