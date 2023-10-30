import {CompanyUpdateActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const companyUpdate = (body: ApiServiceConfig) => ({
  type: CompanyUpdateActionTypes.COMPANY_UPDATE,
  body,
});

export const companyUpdateReset = () => {
  return {
    type: CompanyUpdateActionTypes.COMPANY_UPDATE_RESET,
  };
};