import {CommonUnitDetailActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const commonUnitDetail = (body: ApiServiceConfig) => ({
  type: CommonUnitDetailActionTypes.UNIT_DETAIL,
  body,
});

export const commonUnitDetailReset = () => {
  return {
    type: CommonUnitDetailActionTypes.UNIT_DETAIL_RESET,
  };
};