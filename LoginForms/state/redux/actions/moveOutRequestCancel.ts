import {MoveOutRequestCancelActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const moveOutRequestCancel = (body: ApiServiceConfig) => ({
  type: MoveOutRequestCancelActionTypes.MOVE_OUT_REQUEST_CANCEL,
  body,
});
