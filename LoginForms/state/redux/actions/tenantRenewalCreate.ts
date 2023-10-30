import {TenantRenewalCreateActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const tenantRenewalCreate = (body: ApiServiceConfig) => ({
  type: TenantRenewalCreateActionTypes.TENANT_RENEWAL_CREATE,
  body,
});

export const tenantRenewalCreateReset = () => {
  return {
    type: TenantRenewalCreateActionTypes.TENANT_RENEWAL_CREATE_RESET,
  };
};
