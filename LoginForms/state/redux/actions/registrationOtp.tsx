import { RegistrationOTPActionTypes } from "../type";

import { ApiServiceConfig } from "../../../services/api/types/IApiServicConfig";


export const registrationOTP = (body: ApiServiceConfig) => ({ type: RegistrationOTPActionTypes.REGISTRATION_OTP, body });