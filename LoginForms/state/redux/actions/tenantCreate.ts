import {TenantCreateActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const tenantCreate = (body: ApiServiceConfig) => ({
  type: TenantCreateActionTypes.TENANT_CREATE,
  body,
});

export const tenantCreateReset = () => {
  return {
    type: TenantCreateActionTypes.TENANT_CREATE_RESET,
  };
};
