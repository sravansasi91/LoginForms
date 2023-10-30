import {BookingSlotsActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const bookingSlots = (body: ApiServiceConfig) => ({
  type: BookingSlotsActionTypes.BOOKING_SLOTS,
  body,
});
