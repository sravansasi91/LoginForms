import {AmenitiesListActionTypes} from '../type';

const initialState = {
  isLoading: false,
  error: null,
  status: false,
  message: '',
  code: null,
  responseData: {},
};

export default function amenitiesReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case AmenitiesListActionTypes.AMENITIES_LIST_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case AmenitiesListActionTypes.AMENITIES_LIST_SUCCESS: {
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
    case AmenitiesListActionTypes.AMENITIES_LIST_ERROR:
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
