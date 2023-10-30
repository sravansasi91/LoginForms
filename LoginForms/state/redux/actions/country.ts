import { CountryActionTypes } from "../type";
import { ApiServiceConfig } from "../../../services/api/types/IApiServicConfig";

export const getCountries = (body: ApiServiceConfig) => ({type: CountryActionTypes.COUNTRY, body});