import {ChangePasswordOtpGenActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const changePassGenOTP = (body: ApiServiceConfig) => ({
  type: ChangePasswordOtpGenActionTypes.CHANGEPASSWORDOTPGEN,
  body,
});
