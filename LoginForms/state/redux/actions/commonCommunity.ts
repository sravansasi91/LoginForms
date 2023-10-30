import {CommonCommunityActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const commonCommunity = (body: ApiServiceConfig) => ({
  type: CommonCommunityActionTypes.COMMUNITY,
  body,
});

export const commonCommunityReset = () => {
  return {
    type: CommonCommunityActionTypes.COMMUNITY_RESET,
  };
};
