import { call, put, takeLatest } from "redux-saga/effects";

import { AccessCardCommunity } from "../type";
import { NetworkService } from '../../../services/api/NetworkService';

const fetchApiData = (action: any) => NetworkService({
  method: action.body.httpMethod,
  endPoint: action.body.endPoint,
  headers: action.body.headers,
  data: action.body.data 
});

  function* fetchApiRequestSaga(action: any): any {
    yield put({ type: AccessCardCommunity.ACCESS_CARD_COMMUNITY_LOADER, loading: true });
    const response : any = yield call(fetchApiData, action);

    if (response) {
      yield put({
        type: AccessCardCommunity.ACCESS_CARD_COMMUNITY_SUCCESS,
        payload: {
          data: response.data,
        },
      });
    } else {
      yield put({
        type: AccessCardCommunity.ACCESS_CARD_COMMUNITY_ERROR,
        error: {
          error: response
        }
      });
    }
  }
  
  export default function* watcherSaga() {
    yield takeLatest(AccessCardCommunity.ACCESS_CARD_COMMUNITY, fetchApiRequestSaga);
  }