import {AccountRenewalListActionTypes} from '../type';

import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const accountRenewalList = (body: ApiServiceConfig) => ({
  type: AccountRenewalListActionTypes.ACCOUNT_RENEWAL_LIST,
  body,
});