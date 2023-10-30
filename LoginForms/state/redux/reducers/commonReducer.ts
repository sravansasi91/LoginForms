import {commonActionTypes} from '../type/commonActionType';

const initialState = {
  showBurgerList: false,
};

export const burgerListReducer = (state = initialState, action: any) => {
  if (action.type === commonActionTypes.BURGER_LIST) {
    return {
      ...state,
      showBurgerList: action.status,
    };
  } else {
    return state;
  }
};
