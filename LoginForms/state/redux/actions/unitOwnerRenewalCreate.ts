import {UnitOwnerRenewalCreateActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const unitOwnerRenewalCreate = (body: ApiServiceConfig) => ({
  type: UnitOwnerRenewalCreateActionTypes.UNIT_OWNER_RENEWAL_CREATE,
  body,
});

export const unitOwnerRenewalCreateReset = () => {
  return {
    type: UnitOwnerRenewalCreateActionTypes.UNIT_OWNER_RENEWAL_CREATE_RESET,
  };
};