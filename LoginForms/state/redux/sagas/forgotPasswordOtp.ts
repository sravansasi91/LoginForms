import { call, put, takeLatest } from "redux-saga/effects";
import { ForgotPasswordOtpActionTypes} from "../type";
import { NetworkService } from "../../../services/api";

const fetchApiData = (action: any) => NetworkService({
  method: action.body.httpMethod,
  endPoint: action.body.endPoint,
  headers: action.body.headers,
  data: action.body.data ,
  email :action.body.data.email

});

  function* fetchApiRequestSaga(action: any): any {
    yield put({ type: ForgotPasswordOtpActionTypes.FORGOTPASSWORDOTP_LOADER, loading: true });
    const response : any = yield call(fetchApiData, action);
    if (response) {
      yield put({
        type: ForgotPasswordOtpActionTypes.FORGOTPASSWORDOTP_SUCCESS,
        payload: {
          data: response?.data,
          email: action.body.data.email
        },
      });
    } else {
      yield put({
        type: ForgotPasswordOtpActionTypes.FORGOTPASSWORDOTP_ERROR,
        error: {
          error: response
        }
      });
    }
  }
  
  export default function* watcherSaga() {
    yield takeLatest(ForgotPasswordOtpActionTypes.FORGOTPASSWORDOTP, fetchApiRequestSaga);
  }