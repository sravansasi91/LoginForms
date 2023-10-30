import {MoveInRequestCancelActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const moveInRequestCancel = (body: ApiServiceConfig) => ({
  type: MoveInRequestCancelActionTypes.MOVE_IN_REQUEST_CANCEL,
  body,
});
