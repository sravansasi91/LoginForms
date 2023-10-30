import { DialCodeActionTypes } from "../type";

const initialState = {
    response: {},
    isLoading: false,
    status: false,
    message: "",
    error: null,
    code: null,
  };
  
  export default function getDialCode(state: any = initialState, action: any) {
    switch (action.type) {
      case DialCodeActionTypes.DIAL_CODE_LOADER:
        return {
          ...state,
          isLoading: true,
        };
      case DialCodeActionTypes.DIAL_CODE_SUCCESS: {
        const responseData = action.payload.data
        const response = responseData.data
        const status = responseData.status;
        const message = responseData.message;
        const code = responseData.code;
        return {
          ...initialState,
          isLoading: false,
          response: response,
          status: status,
          message: message,
          code: code,
        };
      }
      case DialCodeActionTypes.DIAL_CODE_ERROR:
        return {
          ...state,
          error: action.error,
          isLoading: false,
        };
  
      default:
        return initialState;
    }
  }