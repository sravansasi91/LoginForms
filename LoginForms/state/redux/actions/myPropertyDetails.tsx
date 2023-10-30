import {MyPropertyDetailsActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const myPropertyDetails = (body: ApiServiceConfig) => ({
  type: MyPropertyDetailsActionTypes.MY_PROPERTY_DETAILS,
  body,
});
