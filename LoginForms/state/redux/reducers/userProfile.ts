import {UserProfileTypes} from '../type';

const initialState = {
  response: [],
  isLoading: false,
  status: false,
  message: '',
  error: null,
  code: null,
};

export default function ownerCreateReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case UserProfileTypes.USER_PROFILE_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case UserProfileTypes.USER_PROFILE_SUCCESS: {
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
    case UserProfileTypes.USER_PROFILE_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
