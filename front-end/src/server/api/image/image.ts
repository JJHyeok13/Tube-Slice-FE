import { PostAxiosInstance } from '@axios/axios.method';

import { UploadImageResponse } from '@server/responseType/image/image';

export const uploadImage = async (): Promise<UploadImageResponse> => {
  try {
    const res = await PostAxiosInstance<UploadImageResponse>(
      `/v1/images/upload`,
    );

    return res.data.result;
  } catch (error) {
    console.log('이미지 업로드 에러', error);
    throw error;
  }
};
