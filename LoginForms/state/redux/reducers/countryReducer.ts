import { CountryActionTypes } from "../type";

const initialState = {
    response: {},
    isLoading: false,
    status: false,
    message: "",
    error: null,
    code: null,
  };
  
  export default function getCountries(state: any = initialState, action: any) {
    switch (action.type) {
      case CountryActionTypes.COUNTRY_LOADER:
        return {
          ...state,
          isLoading: true,
        };
      case CountryActionTypes.COUNTRY_SUCCESS: {
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
      case CountryActionTypes.COUNTRY_ERROR:
        return {
          ...state,
          error: action.error,
          isLoading: false,
        };
  
      default:
        return initialState;
    }
  }