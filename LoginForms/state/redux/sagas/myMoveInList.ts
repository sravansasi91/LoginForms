import { call, put, takeLatest } from "redux-saga/effects";

import { MyMoveInListActionTypes } from "../type";
import { NetworkService } from "../../../services/api";

const fetchApiData = (action: any) => NetworkService({
  method: action.body.httpMethod,
  endPoint: action.body.endPoint,
  headers: action.body.headers,
  param: action.body.param 
});

  function* fetchApiRequestSaga(action: any): any {
    
    yield put({ type: MyMoveInListActionTypes.MY_MOVE_IN_LIST_LOADER, loading: true });
    const response : any = yield call(fetchApiData, action);

    if (response) {
      yield put({
        type: MyMoveInListActionTypes.MY_MOVE_IN_LIST_SUCCESS,
        payload: {
          data: response.data
        },
      });
    } else {
      yield put({
        type: MyMoveInListActionTypes.MY_MOVE_IN_LIST_ERROR,
        error: {
          error: response
        }
      });
    }
  }
  
  export default function* watcherSaga() {
    yield takeLatest(MyMoveInListActionTypes.MY_MOVE_IN_LIST, fetchApiRequestSaga);
  }