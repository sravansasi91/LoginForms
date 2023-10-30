import { call, put, takeLatest } from "redux-saga/effects";
import { DialCodeActionTypes } from "../type";
import { NetworkService } from "../../../services/api";

const fetchApiData = (action: any) => NetworkService({
  method: action.body.httpMethod,
  endPoint: action.body.endPoint,
  headers: action.body.headers,
  data: action.body.data 
});

  function* fetchApiRequestSaga(action: any): any {
    yield put({ type: DialCodeActionTypes.DIAL_CODE_LOADER, loading: true });
    const response : any = yield call(fetchApiData, action);

    if (response) {
      yield put({
        type: DialCodeActionTypes.DIAL_CODE_SUCCESS,
        payload: {
          data: response?.data
        },
      });
    } else {
      yield put({
        type: DialCodeActionTypes.DIAL_CODE_ERROR,
        error: {
          error: response
        }
      });
    }
  }
  
  export default function* watcherSaga() {
    yield takeLatest(DialCodeActionTypes.DIAL_CODE, fetchApiRequestSaga);
  }