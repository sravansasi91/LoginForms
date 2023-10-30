import { CommonConstant } from '../../../constants';
import {CommonMasterCommunityActionTypes} from '../type';

const initialState = {
  response: {},
  isLoading: false,
  status: false,
  message: '',
  error: null,
  code: null,
};

export default function masterCommunityReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case CommonMasterCommunityActionTypes.MASTER_COMMUNITY_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case CommonMasterCommunityActionTypes.MASTER_COMMUNITY_SUCCESS: {
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

    case CommonMasterCommunityActionTypes.MASTER_COMMUNITY_RESET: 
    return {
      ...state,
      response: {},
      isLoading: false,
      status: false,
      message: CommonConstant.EMPTY_STRING,
      error: null,
      code: null,
    };

    case CommonMasterCommunityActionTypes.MASTER_COMMUNITY_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
