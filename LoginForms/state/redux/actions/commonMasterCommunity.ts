import {CommonMasterCommunityActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const commonMasterCommunity = (body: ApiServiceConfig) => ({
  type: CommonMasterCommunityActionTypes.MASTER_COMMUNITY,
  body,
});

export const commonMasterCommunityReset = () => {
  return {
    type: CommonMasterCommunityActionTypes.MASTER_COMMUNITY_RESET,
  };
};
