import {CatalogueMasterCommunityActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const catalogueMasterCommunity = (body: ApiServiceConfig) => ({
  type: CatalogueMasterCommunityActionTypes.CATALOGUE_MASTER_COMMUNITY,
  body,
});
