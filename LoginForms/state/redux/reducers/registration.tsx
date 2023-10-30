import {RegistrationActionTypes} from '../type';

const initialState = {
  isLoading: false,
  error: null,
  status: false,
  message: '',
  code: null,
  email: '',
};

export default function registrationReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case RegistrationActionTypes.REGISTRATION_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case RegistrationActionTypes.REGISTRATION_SUCCESS: {
      const responseData = action.payload.data;

      const status = responseData.status;
      const message = responseData.message;
      const code = responseData.code;
      const email = action.payload.email;
      return {
        ...initialState,
        isLoading: false,
        status: status,
        message: message,
        code: code,
        email: email,
      };
    }
    case RegistrationActionTypes.REGISTRATION_ERROR:
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
