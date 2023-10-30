import {SplashActionTypes} from '../type';

export const skipSplash = (splashStatus: boolean) => {
  return {
    status: splashStatus,
    type: SplashActionTypes.SKIP,
  };
};
