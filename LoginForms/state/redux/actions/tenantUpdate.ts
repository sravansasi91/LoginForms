import {TenantUpdateActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const tenantUpdate = (body: ApiServiceConfig) => ({
  type: TenantUpdateActionTypes.TENANT_UPDATE,
  body,
});

export const tenantUpdateReset = () => {
  return {
    type: TenantUpdateActionTypes.TENANT_UPDATE_RESET,
  };
};