import {AuthActionTypes} from '../type';

export const authValidate = (initialRout: string) => {
  return {
    type: AuthActionTypes.AUTH_VALIDATE,
    rout: initialRout,
  };
};

export const authInvalidate = () => {
  return {
    type: AuthActionTypes.AUTH_INVALIDATE,
  };
};
