import {DefaultPropertyActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const defaultProperty = (body: ApiServiceConfig) => ({
  type: DefaultPropertyActionTypes.DEFAULT_PROPERTY,
  body,
});
