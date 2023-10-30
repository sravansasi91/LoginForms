import {commonActionTypes} from '../type/commonActionType';

export const burgerList = (status: boolean) => ({
  type: commonActionTypes.BURGER_LIST,
  status,
});
