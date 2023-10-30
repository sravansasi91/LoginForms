import {ForgotPasswordActionTypes} from '../type';

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
    case ForgotPasswordActionTypes.FORGOTPASSWORD_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case ForgotPasswordActionTypes.FORGOTPASSWORD_SUCCESS: {
      const responseData = action.payload.data;
      const response = responseData.data;
      const status = responseData.status;
      const message = responseData.message;
      const email = action.payload.email;
      const code = responseData.code;

      return {
        ...initialState,
        isLoading: false,
        response: response,
        status: status,
        message: message,
        email: email,
        forgotPasswordNavigation: true,
        code: code,
      };
    }
    case ForgotPasswordActionTypes.FORGOTPASSWORD_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return initialState;
  }
}
