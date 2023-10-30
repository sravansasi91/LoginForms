import {RestrictionServiceActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const restrictionService = (body: ApiServiceConfig) => ({
  type: RestrictionServiceActionTypes.RESTRICTION_SERVICE,
  body,
});
