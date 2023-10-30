import {MoveInDetailActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const moveInDetail = (body: ApiServiceConfig) => ({
  type: MoveInDetailActionTypes.MOVE_IN_DETAIL,
  body,
});

export const moveInDetailReset = () => {
  return {
    type: MoveInDetailActionTypes.MOVE_IN_DETAIL_RESET,
  };
};