import {CatalogueMasterCommunityActionTypes} from '../type';
const initialState = {
  masterCommunity: {},
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
    case CatalogueMasterCommunityActionTypes.CATALOGUE_MASTER_COMMUNITY_LOADER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CatalogueMasterCommunityActionTypes.CATALOGUE_MASTER_COMMUNITYLIST_SUCCESS: {
      const responseData = action?.payload?.data;
      const masterCommunity = responseData?.data;
      const status = responseData?.status;
      const message = responseData?.message;
      const code = responseData?.code;

      return {
        ...state,
        isLoading: false,
        masterCommunity: masterCommunity,
        status: status,
        message: message,
        masterCommunityStatus: true,
        code: code,
      };
    }
    case CatalogueMasterCommunityActionTypes.CATALOGUE_MASTER_COMMUNITYLIST_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
        masterCommunityStatus: false,
      };

    default:
      return state;
  }
}
