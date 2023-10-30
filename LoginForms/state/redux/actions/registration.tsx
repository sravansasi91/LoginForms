import { RegistrationActionTypes } from "../type";

import { ApiServiceConfig } from "../../../services/api/types/IApiServicConfig";


export const registration = (body: ApiServiceConfig) => ({ type: RegistrationActionTypes.REGISTRATION, body });