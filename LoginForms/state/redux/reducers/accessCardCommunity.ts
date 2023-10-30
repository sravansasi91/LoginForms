import {AccessCardCommunity} from '../type';

const initialState = {
  isLoading: false,
  error: null,
  status: false,
  message: '',
  code: null,
  responseData: {},
};

export default function bookingSlotsReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case AccessCardCommunity.ACCESS_CARD_COMMUNITY_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case AccessCardCommunity.ACCESS_CARD_COMMUNITY_SUCCESS: {
      const responseData = action.payload.data;

      return {
        ...state,
        isLoading: false,
        status: responseData.status,
        message: responseData.message,
        code: responseData.code,
        responseData: responseData?.data,
      };
    }
    case AccessCardCommunity.ACCESS_CARD_COMMUNITY_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        register: false,
      };

    default:
      return state;
  }
}
