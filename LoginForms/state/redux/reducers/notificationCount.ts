import {NotificationCountActionTypes} from '../type';

const initialState = {
  response: [],
  isLoading: false,
  status: false,
  message: '',
  error: null,
  code: null,
  meta: null,
};

export default function notificationCountReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case NotificationCountActionTypes.NOTIFICATION_COUNT_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    case NotificationCountActionTypes.NOTIFICATION_COUNT_SUCCESS: {
      const responseData = action.payload.data;
      const response = responseData.data;
      const status = responseData.status;
      const message = responseData.message;
      const code = responseData.code;
      const meta = responseData.meta;

      return {
        ...state,
        isLoading: false,
        response: response,
        status: status,
        message: message,
        code: code,
        meta: meta,
      };
    }
    case NotificationCountActionTypes.NOTIFICATION_COUNT_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}