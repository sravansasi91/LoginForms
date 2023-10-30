import {MainHeaderType} from '../type';

export const mainHeader = (mainHeaderStatus: boolean) => {
  return {
    type: MainHeaderType.MAIN_HEADER,
    status: mainHeaderStatus,
  };
};
