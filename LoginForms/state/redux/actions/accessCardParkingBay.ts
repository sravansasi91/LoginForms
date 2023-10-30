import {AccessCardParkingBay} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const accessCardParkingBay = (body: ApiServiceConfig) => ({
  type: AccessCardParkingBay.ACCESS_CARD_PARKING_BAY,
  body,
});
