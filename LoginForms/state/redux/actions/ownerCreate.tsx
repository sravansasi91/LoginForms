import {OwnerCreateActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const ownerCreate = (body: ApiServiceConfig) => ({
  type: OwnerCreateActionTypes.OWNER_CREATE,
  body,
});

export const ownerCreateReset = () => {
  return {
    type: OwnerCreateActionTypes.OWNER_CREATE_RESET,
  };
};
