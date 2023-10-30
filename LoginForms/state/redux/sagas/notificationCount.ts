import { call, put, takeLatest } from "redux-saga/effects";

import { NotificationCountActionTypes } from "../type";
import { NetworkService } from "../../../services/api";

const fetchApiData = (action: any) => NetworkService({
  method: action.body.httpMethod,
  endPoint: action.body.endPoint,
  headers: action.body.headers,
  data: action.body.data 
});

  function* fetchApiRequestSaga(action: any): any {
    
    yield put({ type: NotificationCountActionTypes.NOTIFICATION_COUNT_LOADER, loading: true });
    const response : any = yield call(fetchApiData, action);

    if (response) {
      yield put({
        type: NotificationCountActionTypes.NOTIFICATION_COUNT_SUCCESS,
        payload: {
          data: response.data
        },
      });
    } else {
      yield put({
        type: NotificationCountActionTypes.NOTIFICATION_COUNT_ERROR,
        error: {
          error: response
        }
      });
    }
  }
  
  export default function* watcherSaga() {
    yield takeLatest(NotificationCountActionTypes.NOTIFICATION_COUNT, fetchApiRequestSaga);
  }