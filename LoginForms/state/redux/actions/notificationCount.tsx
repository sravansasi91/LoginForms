import {NotificationCountActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const notificationCount = (body: ApiServiceConfig) => ({
  type: NotificationCountActionTypes.NOTIFICATION_COUNT,
  body,
});
