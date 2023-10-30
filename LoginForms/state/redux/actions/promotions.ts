import {PromotionsActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const promotions = (body: ApiServiceConfig) => ({
  type: PromotionsActionTypes.PROMOTIONS,
  body,
});
