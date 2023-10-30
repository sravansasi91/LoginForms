import {AuthActionTypes} from '../type';
import {put, takeLatest} from 'redux-saga/effects';

function* authValidateSaga(): any {
  yield put({
    type: AuthActionTypes.AUTH_VALIDATE,
    authenticated: true,
  });
}

function* authInvalidateSaga(): any {
  yield put({
    type: AuthActionTypes.AUTH_INVALIDATE,
    authenticated: false,
  });
}

export default function* watcherSaga() {
  yield takeLatest(AuthActionTypes.AUTH_VALIDATE, authValidateSaga);
  yield takeLatest(AuthActionTypes.AUTH_INVALIDATE, authInvalidateSaga);
}
