import { CommonConstant } from '../../../constants';
import {CompanyUpdateActionTypes} from '../type';

const initialState = {
  response: {},
  isLoading: false,
  status: false,
  message: '',
  error: null,
  code: null,
};

export default function companyReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case CompanyUpdateActionTypes.COMPANY_UPDATE_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case CompanyUpdateActionTypes.COMPANY_UPDATE_SUCCESS: {
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

    case CompanyUpdateActionTypes.COMPANY_UPDATE_RESET: 
    return {
      ...state,
      isLoading: false,
      status: false,
      message: CommonConstant.EMPTY_STRING,
      error: null,
      code: null,
    };
    case CompanyUpdateActionTypes.COMPANY_UPDATE_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return initialState;
  }
}
