import {SplashActionTypes} from '../type';

const initialState = {
  skipSplash: false,
};

const splashReducer = (state = initialState, action: any) => {
  if (action.type === SplashActionTypes.SKIP) {
    return {
      ...state,
      skipSplash: action.status,
    };
  } else {
    return state;
  }
};

export default splashReducer;
