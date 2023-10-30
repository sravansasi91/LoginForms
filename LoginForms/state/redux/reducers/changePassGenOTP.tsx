import {ChangePasswordOtpGenActionTypes} from '../type';

const initialState = {
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
    case ChangePasswordOtpGenActionTypes.CHANGEPASSWORDOTPGEN_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case ChangePasswordOtpGenActionTypes.CHANGEPASSWORDOTPGEN_SUCCESS: {
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
    case ChangePasswordOtpGenActionTypes.CHANGEPASSWORDOTPGEN_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case 'RESET_CHANGE_OTP_RESPONSE':
    default:
      return initialState;
  }
}
