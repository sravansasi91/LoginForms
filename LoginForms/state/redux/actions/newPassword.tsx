import { NewPasswordActionTypes } from "../type";

import { ApiServiceConfig } from "../../../services/api/types/IApiServicConfig";

export const newPassword = (body: ApiServiceConfig) => ({ type: NewPasswordActionTypes.NEW_PASSWORD, body });