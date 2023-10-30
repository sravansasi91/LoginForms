import {RenewalRequestCancelActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const renewalRequestCancel = (body: ApiServiceConfig) => ({
  type: RenewalRequestCancelActionTypes.RENEWAL_REQUEST_CANCEL,
  body,
});

export const renewalRequestCancelReset = () => {
  return {
    type: RenewalRequestCancelActionTypes.RENEWAL_REQUEST_CANCEL_RESET,
  };
};
