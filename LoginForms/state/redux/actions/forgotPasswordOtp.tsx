import { ForgotPasswordOtpActionTypes } from "../type";

import { ApiServiceConfig } from "../../../services/api/types/IApiServicConfig";

export const forgotPasswordOtp = (body: ApiServiceConfig) => ({ type: ForgotPasswordOtpActionTypes.FORGOTPASSWORDOTP, body });