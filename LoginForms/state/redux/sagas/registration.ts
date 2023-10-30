import { call, put, takeLatest } from "redux-saga/effects";

import { RegistrationActionTypes } from "../type";
import { NetworkService } from '../../../services/api/NetworkService';

const fetchApiData = (action: any) => NetworkService({
  method: action.body.httpMethod,
  endPoint: action.body.endPoint,
  headers: action.body.headers,
  data: action.body.data 
});

  function* fetchApiRequestSaga(action: any): any {
    yield put({ type: RegistrationActionTypes.REGISTRATION_LOADER, loading: true });
    const response : any = yield call(fetchApiData, action);

    if (response) {
      yield put({
        type: RegistrationActionTypes.REGISTRATION_SUCCESS,
        payload: {
          data: response.data,
          email:action.body.data?.email
        },
      });
    } else {
      yield put({
        type: RegistrationActionTypes.REGISTRATION_ERROR,
        error: {
          error: response
        }
      });
    }
  }
  
  export default function* watcherSaga() {
    yield takeLatest(RegistrationActionTypes.REGISTRATION, fetchApiRequestSaga);
  }