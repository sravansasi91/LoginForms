import {UnitOwnerUpdateActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const unitOwnerUpdate = (body: ApiServiceConfig) => ({
  type: UnitOwnerUpdateActionTypes.UNIT_OWNER_UPDATE,
  body,
});

export const unitOwnerUpdateReset = () => {
  return {
    type: UnitOwnerUpdateActionTypes.UNIT_OWNER_UPDATE_RESET,
  };
};