import { CommonConstant } from '../../../constants';
import {ImageUploadActionTypes} from '../type';

const initialState = {
  isLoading: false,
  status: false,
  message: '',
};

export default function imageReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case ImageUploadActionTypes.IMAGE_UPLOAD_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case ImageUploadActionTypes.IMAGE_UPLOAD_SUCCESS: {
       const responseData = action.payload.data;

       let status = false;
       let message = '';
       const DATA_INDEX = 0;
       const SUCCESS_CODE = "200"
       try {
        const data = responseData[DATA_INDEX]
        status = data.status.code === SUCCESS_CODE ? true : false
        message = data.status.message
       }catch(error){}

      return {
        ...state,
        isLoading: false,
        status: status,
        message: message,
      };
    }
    case ImageUploadActionTypes.IMAGE_UPLOAD_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case ImageUploadActionTypes.IMAGE_UPLOAD_RESET: 
    return {
      ...state,
      isLoading: false,
      status: false,
      message: CommonConstant.EMPTY_STRING,
    };

    default:
      return state;
  }
}
