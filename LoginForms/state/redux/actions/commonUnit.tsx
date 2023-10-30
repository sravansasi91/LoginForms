import {CommonUnitActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const commonUnit = (body: ApiServiceConfig) => ({
  type: CommonUnitActionTypes.UNIT,
  body,
});

export const commonUnitReset = () => {
  return {
    type: CommonUnitActionTypes.UNIT_RESET,
  };
};
