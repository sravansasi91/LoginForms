import { LoginActionTypes } from "../type";

import { ApiServiceConfig } from "../../../services/api/types/IApiServicConfig";

export const login = (body: ApiServiceConfig) => ({ type: LoginActionTypes.LOGIN, body });