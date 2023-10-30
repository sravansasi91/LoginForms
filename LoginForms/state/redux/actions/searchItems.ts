import {SearchItemsActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const searchItems = (body: ApiServiceConfig) => ({
  type: SearchItemsActionTypes.SEARCH_ITEMS,
  body,
});
