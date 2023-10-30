import { ActionTypes } from "../type";

const initialState = {
  response: {},
  isLoader: false,
  responseError: null,
};

export default function sampleReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.SAMPLE_REDUCER_LOADER:
      return {
        ...state,
        isLoader: true,
      };
    case ActionTypes.SAMPLE_REDUCER_SUCCESS: {
      const response = action.payload.response;
      return {
        ...initialState,
        isLoader: false,
        response: response,
      };
    }
    case ActionTypes.SAMPLE_REDUCER_ERROR:
      return {
        ...state,
        responseError: action.error,
        isLoader: false,
      };

    default:
      return initialState;
  }
}