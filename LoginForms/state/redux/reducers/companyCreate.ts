import { CommonConstant } from '../../../constants';
import {CompanyCreateActionTypes} from '../type';

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
    case CompanyCreateActionTypes.COMPANY_CREATE_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case CompanyCreateActionTypes.COMPANY_CREATE_SUCCESS: {
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

    case CompanyCreateActionTypes.COMPANY_CREATE_RESET: 
    return {
      ...state,
      isLoading: false,
      status: false,
      message: CommonConstant.EMPTY_STRING,
      error: null,
      code: null,
    };
    case CompanyCreateActionTypes.COMPANY_CREATE_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return initialState;
  }
}
