import {MoveOutListActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const moveOutList = (body: ApiServiceConfig) => ({
  type: MoveOutListActionTypes.MOVE_OUT_LIST,
  body,
});