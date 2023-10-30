import { ResendOtpActionTypes } from "../type";

import { ApiServiceConfig } from "../../../services/api/types/IApiServicConfig";

export const resendOtp = (body: ApiServiceConfig) => ({ type: ResendOtpActionTypes.RESENDOTP, body });