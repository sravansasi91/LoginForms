import {CatalogueWholeCommunityActionTypes} from '../type';

const initialState = {
  community: {},
  isLoading: false,
  status: false,
  message: null,
  masterCommunityStatus: false,
  error: null,
};

export default function masterCommunityListReducer(
  state: any = initialState,
  action: any,
) {
  switch (action.type) {
    case CatalogueWholeCommunityActionTypes.CATALOGUE_WHOLE_COMMUNITY_LOADER: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case CatalogueWholeCommunityActionTypes.CATALOGUE_WHOLE_COMMUNITY_SUCCESS: {
      const responseData = action.payload.data;
      const community = responseData.data;
      const status = responseData.status;
      const message = responseData.message;
      return {
        ...state,
        isLoading: false,
        community: community,
        status: status,
        message: message,
      };
    }
    case CatalogueWholeCommunityActionTypes.CATALOGUE_WHOLE_COMMUNITY_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
}
