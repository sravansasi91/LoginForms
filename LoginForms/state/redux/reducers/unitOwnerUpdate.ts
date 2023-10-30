import { CommonConstant } from '../../../constants';
import {UnitOwnerUpdateActionTypes} from '../type';

const initialState = {
  response: {},
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
    case UnitOwnerUpdateActionTypes.UNIT_OWNER_UPDATE_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case UnitOwnerUpdateActionTypes.UNIT_OWNER_UPDATE_SUCCESS: {
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

    case UnitOwnerUpdateActionTypes.UNIT_OWNER_UPDATE_RESET: 
    return {
      ...state,
      isLoading: false,
      status: false,
      message: CommonConstant.EMPTY_STRING,
      error: null,
      code: null,
    };

    case UnitOwnerUpdateActionTypes.UNIT_OWNER_UPDATE_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
