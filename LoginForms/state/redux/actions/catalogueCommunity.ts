import {CatalogueCommunityActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const catalogueCommunity = (body: ApiServiceConfig) => ({
  type: CatalogueCommunityActionTypes.CATALOGUE_COMMUNITY,
  body,
});
