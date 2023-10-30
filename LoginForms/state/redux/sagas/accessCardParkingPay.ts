import { call, put, takeLatest } from "redux-saga/effects";

import { AccessCardParkingBay } from "../type";
import { NetworkService } from '../../../services/api/NetworkService';

const fetchApiData = (action: any) => NetworkService({
  method: action.body.httpMethod,
  endPoint: action.body.endPoint,
  headers: action.body.headers,
  data: action.body.data 
});

  function* fetchApiRequestSaga(action: any): any {
    yield put({ type: AccessCardParkingBay.ACCESS_CARD_PARKING_BAY_LOADER, loading: true });
    const response : any = yield call(fetchApiData, action);

    if (response) {
      yield put({
        type: AccessCardParkingBay.ACCESS_CARD_PARKING_BAY_SUCCESS,
        payload: {
          data: response.data,
        },
      });
    } else {
      yield put({
        type: AccessCardParkingBay.ACCESS_CARD_PARKING_BAY_ERROR,
        error: {
          error: response
        }
      });
    }
  }
  
  export default function* watcherSaga() {
    yield takeLatest(AccessCardParkingBay.ACCESS_CARD_PARKING_BAY, fetchApiRequestSaga);
  }