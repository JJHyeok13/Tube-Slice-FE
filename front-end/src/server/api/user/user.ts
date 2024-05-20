import { PatchAxiosInstance } from '@axios/axios.method';

import { UpdateUserProfileRequest } from '@server/requestType/user/user';
import { UpdateUserProfileResponse } from '@server/responseType/user/user';

// 유저 정보 수정하기 /v1/users
export const updateUserProfile = async (
  data: UpdateUserProfileRequest,
): Promise<UpdateUserProfileResponse> => {
  const res = await PatchAxiosInstance<UpdateUserProfileResponse>(
    `/v1/users`,
    data,
  );

  return res.data;
};
