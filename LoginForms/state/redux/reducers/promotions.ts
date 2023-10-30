import {PromotionsActionTypes} from '../type';

const initialState = {
  response: [],
  isLoading: false,
  status: false,
  message: '',
  error: null,
  code: null,
};

export default function promotionsReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case PromotionsActionTypes.PROMOTIONS_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case PromotionsActionTypes.PROMOTIONS_SUCCESS: {
      const responseData = action.payload.data;
      const response = responseData.data;
      const status = responseData.status;
      const message = responseData.message;
      const code = responseData.code;
      return {
        ...state,
        response: response,
        isLoading: false,
        status: status,
        message: message,
        code: code,
      };
    }
    case PromotionsActionTypes.PROMOTIONS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
