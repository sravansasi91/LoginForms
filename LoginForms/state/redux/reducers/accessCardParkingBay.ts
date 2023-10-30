import {AccessCardParkingBay} from '../type';

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
    case AccessCardParkingBay.ACCESS_CARD_PARKING_BAY_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case AccessCardParkingBay.ACCESS_CARD_PARKING_BAY_SUCCESS: {
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
    case AccessCardParkingBay.ACCESS_CARD_PARKING_BAY_ERROR:
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
