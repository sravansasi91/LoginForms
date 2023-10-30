import {BookingSlotsActionTypes} from '../type';

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
    case BookingSlotsActionTypes.BOOKING_SLOTS_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case BookingSlotsActionTypes.BOOKING_SLOTS_SUCCESS: {
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
    case BookingSlotsActionTypes.BOOKING_SLOTS_ERROR:
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
