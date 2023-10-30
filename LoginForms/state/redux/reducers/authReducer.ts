import {CommonConstant} from '../../../constants';
import {AuthActionTypes} from '../type';

const initialState = {
  authenticated: false,
  initialRout: CommonConstant.EMPTY_STRING,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AuthActionTypes.AUTH_VALIDATE:
      return {
        ...state,
        authenticated: true,
        initialRout: action.rout,
      };

    case AuthActionTypes.AUTH_INVALIDATE:
      return {
        ...state,
        authenticated: false,
        initialRout: CommonConstant.EMPTY_STRING,
      };

    default:
      return state;
  }
};

export default authReducer;
