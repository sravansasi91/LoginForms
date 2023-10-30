import {ServiceRequestUnitActionTypes} from '../type';

const initialState = {
  response: [],
  isLoading: false,
  status: false,
  message: '',
  error: null,
  code: null,
};

export default function serviceRequestUnitListReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case ServiceRequestUnitActionTypes.SERVICE_REQUEST_UNIT_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case ServiceRequestUnitActionTypes.SERVICE_REQUEST_UNIT_SUCCESS: {
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
    case ServiceRequestUnitActionTypes.SERVICE_REQUEST_UNIT_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
