import {MainHeaderType} from '../type';

const initialState = {
  showMainHeader: true,
};

const mainHeaderReducer = (state = initialState, action: any) => {
  if (action.type === MainHeaderType.MAIN_HEADER) {
    return {
      ...state,
      showMainHeader: action.status,
    };
  } else {
    return state;
  }
};

export default mainHeaderReducer;
