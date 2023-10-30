import {ForgotPasswordOtpActionTypes} from '../type';
import { ResendOtpActionTypes } from '../type/resendOtp';

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
    case ResendOtpActionTypes.RESENDOTP_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case ResendOtpActionTypes.RESENDOTP_SUCCESS: {
      const responseData = action.payload.data;
      const response = responseData.data;
      const code = responseData.code;
      const status = responseData.status;
      const message = responseData.message;

      return {
        ...initialState,
        isLoading: false,
        response: response,
        status: status,
        code: code,
        message: message,
      };
    }
    case ResendOtpActionTypes.RESENDOTP_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return initialState;
  }
}
