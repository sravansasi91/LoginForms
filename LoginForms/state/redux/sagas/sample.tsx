import { call, put, takeLatest } from "redux-saga/effects";
import { ActionTypes } from "../type";
import { NetworkService } from "../../../services/api";

const fetchApiData = (action: any) =>
NetworkService({
    method: action.body.method,
    baseURL: action.body.baseURL,
    url: action.body.url,
    headers: action.body.headers,
    data: action.data 
  });

function* fetchApiRequestSaga(action: any): any {
  yield put({ type: ActionTypes.SAMPLE_REDUCER_LOADER, loading: true });
  const response : any = yield call(fetchApiData, action);
  if (response) {
    yield put({
      type: ActionTypes.SAMPLE_REDUCER_SUCCESS,
      payload: {
        location: JSON.stringify(response),
      },
    });
  } else {
    yield put({
      type: ActionTypes.SAMPLE_REDUCER_ERROR,
      error: {
        error: response
      }
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(ActionTypes.SAMPLE_REDUCER, fetchApiRequestSaga);
}