import {MyMoveInListActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const myMoveInList = (body: ApiServiceConfig) => ({
  type: MyMoveInListActionTypes.MY_MOVE_IN_LIST,
  body,
});