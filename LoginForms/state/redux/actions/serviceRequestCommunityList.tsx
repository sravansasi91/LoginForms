import {ServiceRequestCommunityActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const serviceRequestCommunityList = (body: ApiServiceConfig) => ({
  type: ServiceRequestCommunityActionTypes.SERVICE_REQUEST_COMMUNITY,
  body,
});
