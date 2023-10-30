import {FilterUnitsActionTypes} from '../type';

const initialState = {
  response: [],
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
    case FilterUnitsActionTypes.FILTER_UNITS_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case FilterUnitsActionTypes.FILTER_UNITS_SUCCESS: {
      
      const responseData = action?.payload?.data;
      const response = responseData?.data;
      const status = responseData?.status;
      const message = responseData?.message;
      const code = responseData?.code;
      return {
        ...state,
        response: response,
        isLoading: false,
        status: status,
        message: message,
        code: code,
      };
      
    }
    case FilterUnitsActionTypes.FILTER_UNITS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
