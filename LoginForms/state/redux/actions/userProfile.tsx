import {UserProfileTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const userProfile = (body: ApiServiceConfig) => ({
  type: UserProfileTypes.USER_PROFILE,
  body,
});
