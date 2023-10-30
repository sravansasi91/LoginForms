import {ServiceRequestCommunityActionTypes} from '../type';

const initialState = {
  response: [],
  isLoading: false,
  status: false,
  message: '',
  error: null,
  code: null,
};

export default function serviceRequestCommunityListReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case ServiceRequestCommunityActionTypes.SERVICE_REQUEST_COMMUNITY_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case ServiceRequestCommunityActionTypes.SERVICE_REQUEST_COMMUNITY_SUCCESS: {
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
    case ServiceRequestCommunityActionTypes.SERVICE_REQUEST_COMMUNITY_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
