import {
  DeleteAxiosInstance,
  GetAxiosInstance,
  PatchAxiosInstance,
} from '@axios/axios.method';

import { UpdateUserProfileRequest } from '@server/requestType/user/user';
import {
  UpdateUserProfileResponse,
  DeleteMemberResponse,
  GetUserProfileResponse,
} from '@server/responseType/user/user';

// 유저 정보 조회하기 /v1/users/setting
export const getUserProfile = async (): Promise<GetUserProfileResponse> => {
  try {
    const res = await GetAxiosInstance<GetUserProfileResponse>(
      `/v1/users/setting`,
    );

    return res.data.result;
  } catch (error) {
    console.log('유저 정보 조회 에러', error);
    throw error;
  }
};

// 유저 정보 수정하기 /v1/users
export const updateUserProfile = async (
  data: UpdateUserProfileRequest,
): Promise<UpdateUserProfileResponse> => {
  try {
    const res = await PatchAxiosInstance<UpdateUserProfileResponse>(
      `/v1/users`,
      data,
    );

    return res.data.result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 회원 탈퇴 /v1/users
export const deleteMember = async (): Promise<DeleteMemberResponse> => {
  try {
    const res = await DeleteAxiosInstance<DeleteMemberResponse>(`/v1/users`);

    return res.data.result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
