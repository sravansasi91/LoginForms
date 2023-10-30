import {AccessCardCommunity} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const accessCardCommunity = (body: ApiServiceConfig) => ({
  type: AccessCardCommunity.ACCESS_CARD_COMMUNITY,
  body,
});
