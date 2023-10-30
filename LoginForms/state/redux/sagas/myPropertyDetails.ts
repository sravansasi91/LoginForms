import { call, put, takeLatest } from "redux-saga/effects";

import { MyPropertyDetailsActionTypes } from "../type";
import { NetworkService } from "../../../services/api";

const fetchApiData = (action: any) => NetworkService({
  method: action.body.httpMethod,
  endPoint: action.body.endPoint,
  headers: action.body.headers,
  data: action.body.data 
});

  function* fetchApiRequestSaga(action: any): any {
    
    yield put({ type: MyPropertyDetailsActionTypes.MY_PROPERTY_DETAILS_LOADER, loading: true });
    const response : any = yield call(fetchApiData, action);

    if (response) {
      yield put({
        type: MyPropertyDetailsActionTypes.MY_PROPERTY_DETAILS_SUCCESS,
        payload: {
          data: response.data
        },
      });
    } else {
      yield put({
        type: MyPropertyDetailsActionTypes.MY_PROPERTY_DETAILS_ERROR,
        error: {
          error: response
        }
      });
    }
  }
  
  export default function* watcherSaga() {
    yield takeLatest(MyPropertyDetailsActionTypes.MY_PROPERTY_DETAILS, fetchApiRequestSaga);
  }