import {RegistrationOTPActionTypes} from '../type';

const initialState = {
  response: {},
  isLoading: false,
  error: null,
  verified: false,
  code: null,
  status: false,
};

export default function registrationOTPReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case RegistrationOTPActionTypes.REGISTRATION_OTP_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case RegistrationOTPActionTypes.REGISTRATION_OTP_SUCCESS: {
      const response = action.payload.data;
      const code = action.payload.data.code;
      const status = response.status;

      return {
        ...initialState,
        isLoading: false,
        response,
        verified: true,
        code: code,
        status: status,
      };
    }
    case RegistrationOTPActionTypes.REGISTRATION_OTP_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        register: false,
      };

    default:
      return initialState;
  }
}
