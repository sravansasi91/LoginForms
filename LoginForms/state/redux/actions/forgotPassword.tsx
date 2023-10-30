import { ForgotPasswordActionTypes } from "../type";

import { ApiServiceConfig } from "../../../services/api/types/IApiServicConfig";

export const forgotPassword = (body: ApiServiceConfig) => ({ type: ForgotPasswordActionTypes.FORGOTPASSWORD, body });