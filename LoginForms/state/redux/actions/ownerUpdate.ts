import {OwnerUpdateActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const ownerUpdate = (body: ApiServiceConfig) => ({
  type: OwnerUpdateActionTypes.OWNER_UPDATE,
  body,
});

export const ownerUpdateReset = () => {
  return {
    type: OwnerUpdateActionTypes.OWNER_UPDATE_RESET,
  };
};