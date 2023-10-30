import {PermanentAddressTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const permanentAddress = (body: ApiServiceConfig) => ({
  type: PermanentAddressTypes.PERM_ADDRESS,
  body,
});
