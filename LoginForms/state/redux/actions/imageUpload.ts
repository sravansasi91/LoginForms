import {ImageUploadActionTypes} from '../type';
import {ApiServiceConfig} from '../../../services/api/types/IApiServicConfig';

export const imageUpload = (body: ApiServiceConfig) => ({
  type: ImageUploadActionTypes.IMAGE_UPLOAD,
  body,
});

export const imageUploadReset = () => {
  return {
    type: ImageUploadActionTypes.IMAGE_UPLOAD_RESET,
  };
};