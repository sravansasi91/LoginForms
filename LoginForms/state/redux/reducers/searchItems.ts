import {SearchItemsActionTypes} from '../type';

const initialState = {
  dataBody: [],
  isLoading: false,
  status: false,
  message: null,
  error: null,
};

export default function searchItemsReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case SearchItemsActionTypes.SEARCH_ITEMS_LOADER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SearchItemsActionTypes.SEARCH_ITEMS_SUCCESS: {
      const responseData = action.payload.data;
      const dataBody = responseData?.data;

      const status = responseData.status;
      const message = responseData.message;
      return {
        ...state,
        isLoading: false,
        dataBody: dataBody,
        status: status,
        message: message,
      };
    }
    case SearchItemsActionTypes.SEARCH_ITEMS_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
