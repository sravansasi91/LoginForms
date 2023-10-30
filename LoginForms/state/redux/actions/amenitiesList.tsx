import {AmenitiesListActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const amenitiesList = (body: ApiServiceConfig) => ({
  type: AmenitiesListActionTypes.AMENITIES_LIST,
  body,
});
