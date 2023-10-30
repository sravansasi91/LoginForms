import {ServiceRequestUnitActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const serviceRequestUnitList = (body: ApiServiceConfig) => ({
  type: ServiceRequestUnitActionTypes.SERVICE_REQUEST_UNIT,
  body,
});
