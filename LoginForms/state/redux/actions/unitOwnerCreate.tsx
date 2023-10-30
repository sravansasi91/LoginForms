import {UnitOwnerCreateActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const unitOwnerCreate = (body: ApiServiceConfig) => ({
  type: UnitOwnerCreateActionTypes.UNIT_OWNER_CREATE,
  body,
});

export const unitOwnerCreateReset = () => {
  return {
    type: UnitOwnerCreateActionTypes.UNIT_OWNER_CREATE_RESET,
  };
};
