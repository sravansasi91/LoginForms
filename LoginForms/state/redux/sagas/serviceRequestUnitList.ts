import { call, put, takeLatest } from "redux-saga/effects";

import { ServiceRequestUnitActionTypes } from "../type";
import { NetworkService } from "../../../services/api";

const fetchApiData = (action: any) => NetworkService({
  method: action.body.httpMethod,
  endPoint: action.body.endPoint,
  headers: action.body.headers,
  data: action.body.data,
  param: action.body.param 
});

  function* fetchApiRequestSaga(action: any): any {
    
    yield put({ type: ServiceRequestUnitActionTypes.SERVICE_REQUEST_UNIT_LOADER, loading: true });
    const response : any = yield call(fetchApiData, action);

    if (response) {
      yield put({
        type: ServiceRequestUnitActionTypes.SERVICE_REQUEST_UNIT_SUCCESS,
        payload: {
          data: response.data
        },
      });
    } else {
      yield put({
        type: ServiceRequestUnitActionTypes.SERVICE_REQUEST_UNIT_ERROR,
        error: {
          error: response
        }
      });
    }
  }
  
  export default function* watcherSaga() {
    yield takeLatest(ServiceRequestUnitActionTypes.SERVICE_REQUEST_UNIT, fetchApiRequestSaga);
  }