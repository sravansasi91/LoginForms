import {CompanyCreateActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const companyCreate = (body: ApiServiceConfig) => ({
  type: CompanyCreateActionTypes.COMPANY_CREATE,
  body,
});

export const companyCreateReset = () => {
  return {
    type: CompanyCreateActionTypes.COMPANY_CREATE_RESET,
  };
};
