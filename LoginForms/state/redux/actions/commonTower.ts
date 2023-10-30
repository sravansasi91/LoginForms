import {CommonTowerActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const commonTower = (body: ApiServiceConfig) => ({
  type: CommonTowerActionTypes.TOWER,
  body,
});

export const commonTowerReset = () => {
  return {
    type: CommonTowerActionTypes.TOWER_RESET,
  };
};
