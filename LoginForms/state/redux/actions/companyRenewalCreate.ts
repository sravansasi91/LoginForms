import {CompanyRenewalCreateActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const companyRenewalCreate = (body: ApiServiceConfig) => ({
  type: CompanyRenewalCreateActionTypes.COMPANY_RENEWAL_CREATE,
  body,
});

export const companyRenewalCreateReset = () => {
  return {
    type: CompanyRenewalCreateActionTypes.COMPANY_RENEWAL_CREATE_RESET,
  };
};