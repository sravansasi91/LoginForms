import { DialCodeActionTypes } from "../type";
import { ApiServiceConfig } from "../../../services/api/types/IApiServicConfig";

export const getDailCode = (body: ApiServiceConfig) => ({type: DialCodeActionTypes.DIAL_CODE, body});