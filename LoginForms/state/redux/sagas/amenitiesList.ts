import { call, put, takeLatest } from "redux-saga/effects";

import { AmenitiesListActionTypes } from "../type";
import { NetworkService } from '../../../services/api/NetworkService';

const fetchApiData = (action: any) => NetworkService({
  method: action.body.httpMethod,
  endPoint: action.body.endPoint,
  headers: action.body.headers,
  data: action.body.data 
});

  function* fetchApiRequestSaga(action: any): any {
    yield put({ type: AmenitiesListActionTypes.AMENITIES_LIST_LOADER, loading: true });
    const response : any = yield call(fetchApiData, action);

    if (response) {
      yield put({
        type: AmenitiesListActionTypes.AMENITIES_LIST_SUCCESS,
        payload: {
          data: response.data,
        },
      });
    } else {
      yield put({
        type: AmenitiesListActionTypes.AMENITIES_LIST_ERROR,
        error: {
          error: response
        }
      });
    }
  }
  
  export default function* watcherSaga() {
    yield takeLatest(AmenitiesListActionTypes.AMENITIES_LIST, fetchApiRequestSaga);
  }
