import { call, put, takeLatest } from "redux-saga/effects";

import { AccountRenewalListActionTypes } from "../type";
import { NetworkService } from "../../../services/api";

const fetchApiData = (action: any) => NetworkService({
  method: action.body.httpMethod,
  endPoint: action.body.endPoint,
  headers: action.body.headers,
  param: action.body.param 
});

  function* fetchApiRequestSaga(action: any): any {
    
    yield put({ type: AccountRenewalListActionTypes.ACCOUNT_RENEWAL_LIST_LOADER, loading: true });
    const response : any = yield call(fetchApiData, action);

    if (response) {
      yield put({
        type: AccountRenewalListActionTypes.ACCOUNT_RENEWAL_LIST_SUCCESS,
        payload: {
          data: response.data
        },
      });
    } else {
      yield put({
        type: AccountRenewalListActionTypes.ACCOUNT_RENEWAL_LIST_ERROR,
        error: {
          error: response
        }
      });
    }
  }
  
  export default function* watcherSaga() {
    yield takeLatest(AccountRenewalListActionTypes.ACCOUNT_RENEWAL_LIST, fetchApiRequestSaga);
  }