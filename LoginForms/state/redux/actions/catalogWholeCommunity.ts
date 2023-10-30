import {CatalogueWholeCommunityActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const catalogWholeCommunity = (body: ApiServiceConfig) => ({
  type: CatalogueWholeCommunityActionTypes.CATALOGUE_WHOLE_COMMUNITY,
  body,
});
