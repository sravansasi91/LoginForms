import {AccountRenewalListActionTypes} from '../type';

const initialState = {
  response: {},
  isLoading: false,
  status: false,
  message: '',
  error: null,
  code: null,
  totalRecords: null,
  totalPages: null,
};

export default function accountRenewalList(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case AccountRenewalListActionTypes.ACCOUNT_RENEWAL_LIST_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case AccountRenewalListActionTypes.ACCOUNT_RENEWAL_LIST_SUCCESS: {
      const responseData = action.payload.data;
      const response = responseData.data;
      const status = responseData.status;
      const message = responseData.message;
      const code = responseData.code;
      const records = responseData.total_records;
      const pages = responseData.total_pages;
      return {
        ...state,
        isLoading: false,
        response: response,
        status: status,
        message: message,
        code: code,
        totalRecords: records,
        totalPages: pages
      };
    }
    case AccountRenewalListActionTypes.ACCOUNT_RENEWAL_LIST_ERROR:
      const responseData = action.payload.data;
      return {
        ...state,
        message: responseData.message,
        code: responseData.code,
        isLoading: false,
      };

    default:
      return state;
  }
}
