import {call, put, takeLatest} from 'redux-saga/effects';

import {FilterUnitsActionTypes} from '../type';
import {NetworkService} from '../../../services/api';

const fetchApiData = (action: any) =>
  NetworkService({
    method: action.requestBody.httpMethod,
    endPoint: action.requestBody.endPoint,
    headers: action.requestBody.headers,
    data: action.requestBody.data,
    param: action.requestBody.param,
  });

function* fetchApiRequestSaga(action: any): any {
  yield put({type: FilterUnitsActionTypes.FILTER_UNITS_LOADER, loading: true});

  const response: any = yield call(fetchApiData, action);

  if (response) {
    yield put({
      type: FilterUnitsActionTypes.FILTER_UNITS_SUCCESS,
      payload: {
        data: response?.data,
      },
    });
  } else {
    yield put({
      type: FilterUnitsActionTypes.FILTER_UNITS_ERROR,
      error: {
        error: response,
      },
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(FilterUnitsActionTypes.FILTER_UNITS, fetchApiRequestSaga);
}
