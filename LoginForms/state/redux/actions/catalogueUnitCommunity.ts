import {CatalogueUnitCommunityActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const catalogueUnitCommunity = (body: ApiServiceConfig) => ({
  type: CatalogueUnitCommunityActionTypes.CATALOGUE_COMMUNITY,
  body,
});
