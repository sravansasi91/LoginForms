import {MoveInListActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const moveInList = (body: ApiServiceConfig) => ({
  type: MoveInListActionTypes.MOVE_IN_LIST,
  body,
});