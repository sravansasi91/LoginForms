import {ForgotPasswordOtpActionTypes} from '../type';

const initialState = {
  response: {},
  isLoading: false,
  status: false,
  message: '',
  error: null,
  email: '',
  code: null,
};

export default function reducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case ForgotPasswordOtpActionTypes.FORGOTPASSWORDOTP_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case ForgotPasswordOtpActionTypes.FORGOTPASSWORDOTP_SUCCESS: {
      const responseData = action.payload.data;
      const response = responseData.data;
      const code = responseData.code;
      const status = responseData.status;
      const message = responseData.message;
      const email = responseData.email;

      return {
        ...initialState,
        isLoading: false,
        response: response,
        status: status,
        code: code,
        message: message,
        email: email,
      };
    }
    case ForgotPasswordOtpActionTypes.FORGOTPASSWORDOTP_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return initialState;
  }
}
