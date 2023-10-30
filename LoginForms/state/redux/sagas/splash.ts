import {SplashActionTypes} from '../type';
import {put, takeLatest} from 'redux-saga/effects';

function* splashSkipSaga(): any {
  yield put({
    type: SplashActionTypes.SKIP,
  });
}

export default function* watcherSaga() {
  yield takeLatest(SplashActionTypes.SKIP, splashSkipSaga);
}
