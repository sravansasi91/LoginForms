import { call, put, takeLatest } from "redux-saga/effects";

import { MoveInRequestCancelActionTypes } from "../type";
import { NetworkService } from "../../../services/api";

const fetchApiData = (action: any) => NetworkService({
  method: action.body.httpMethod,
  endPoint: action.body.endPoint,
  headers: action.body.headers,
  param: action.body.param 
});

  function* fetchApiRequestSaga(action: any): any {
    
    yield put({ type: MoveInRequestCancelActionTypes.MOVE_IN_REQUEST_CANCEL_LOADER, loading: true });
    const response : any = yield call(fetchApiData, action);

    if (response) {
      yield put({
        type: MoveInRequestCancelActionTypes.MOVE_IN_REQUEST_CANCEL_SUCCESS,
        payload: {
          data: response.data
        },
      });
    } else {
      yield put({
        type: MoveInRequestCancelActionTypes.MOVE_IN_REQUEST_CANCEL_ERROR,
        error: {
          error: response
        }
      });
    }
  }
  
  export default function* watcherSaga() {
    yield takeLatest(MoveInRequestCancelActionTypes.MOVE_IN_REQUEST_CANCEL, fetchApiRequestSaga);
  }