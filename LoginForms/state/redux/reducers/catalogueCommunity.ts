import {CatalogueCommunityActionTypes} from '../type';
const initialState = {
  community: {},
  isLoading: false,
  status: false,
  message: null,
  masterCommunityStatus: false,
  error: null,
  code: null,

};

export default function masterCommunityListReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case CatalogueCommunityActionTypes.CATALOGUE_COMMUNITY_LOADER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CatalogueCommunityActionTypes.CATALOGUE_COMMUNITY_SUCCESS: {
      const responseData = action?.payload?.data;
      const community = responseData?.data?.communities;
      const status = responseData?.status;
      const message = responseData?.message;
      const code = responseData?.code;

      return {
        ...state,
        isLoading: false,
        community: community,
        status: status,
        message: message,
        code:code
      };
    }
    case CatalogueCommunityActionTypes.CATALOGUE_COMMUNITY_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
