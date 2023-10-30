import {FilterUnitsActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const filterUnits = (requestBody: ApiServiceConfig) => ({
  type: FilterUnitsActionTypes.FILTER_UNITS,
  requestBody,
});
