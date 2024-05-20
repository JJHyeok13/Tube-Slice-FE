import { DeleteAxiosInstance, PostAxiosInstance } from '@axios/axios.method';

import { FollowUnfollowResponse } from '@server/responseType/follow';

// 팔로우하기 /v1/follows/users/{userId}
export const doFollow = async (userId: string) => {
  try {
    const res = await PostAxiosInstance<FollowUnfollowResponse>(
      `/v1/follows/users/${userId}`,
    );

    return res.data;
  } catch (error) {
    console.log('팔로우 에러', error);

    throw error;
  }
};

// 팔로우 취소하기 /v1/follows/users/{userId}
export const doUnfollow = async (userId: string) => {
  try {
    const res = await DeleteAxiosInstance<FollowUnfollowResponse>(
      `/v1/follows/users/${userId}`,
    );

    return res.data;
  } catch (error) {
    console.log('언팔로우 에러', error);

    throw error;
  }
};
