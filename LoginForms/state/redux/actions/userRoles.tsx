import {UserRoleSActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const userRole = (body: ApiServiceConfig) => ({
  type: UserRoleSActionTypes.USER_ROLE,
  body,
});
