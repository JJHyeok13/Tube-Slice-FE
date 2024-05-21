import { PostAxiosInstance, DeleteAxiosInstance } from '@axios/axios.method';

import {
  FollowResponse,
  UnfollowResponse,
} from '@server/responseType/follow/follow';

// 팔로우하기 /v1/follows/users/{userId}
export const doFollow = async (userId: string): Promise<FollowResponse> => {
  try {
    const res = await PostAxiosInstance<FollowResponse>(
      `/v1/follows/users/${userId}`,
    );

    return res.data.result;
  } catch (error) {
    console.log('팔로우 에러', error);
    throw error;
  }
};

// 팔로우 취소하기 /v1/follows/users/{userId}
export const doUnfollow = async (userId: string): Promise<UnfollowResponse> => {
  try {
    const res = await DeleteAxiosInstance<UnfollowResponse>(
      `/v1/follows/users/${userId}`,
    );

    return res.data.result;
  } catch (error) {
    console.log('언팔로우 에러', error);
    throw error;
  }
};
