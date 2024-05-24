import { GetAxiosInstance } from '@axios/axios.method';

import { FollowResponse } from '@server/responseType/user/follow';

// 나의 팔로잉 목록 가져오기 /v1/users/me/following
export const getMyFollowing = async (): Promise<FollowResponse> => {
  try {
    const res = await GetAxiosInstance<FollowResponse>(
      `/v1/users/me/following`,
    );

    return res.data.result;
  } catch (error) {
    console.log('나의 팔로잉 목록 가져오기 에러', error);
    throw error;
  }
};

// 나의 팔로워 목록 가져오기 /v1/users/me/follower
export const getMyFollower = async (): Promise<FollowResponse> => {
  try {
    const res = await GetAxiosInstance<FollowResponse>(`/v1/users/me/follower`);

    return res.data.result;
  } catch (error) {
    console.log('나의 팔로워 목록 가져오기 에러', error);
    throw error;
  }
};

// 특정유저의 팔로잉 목록 가져오기 /v1/users/{userId}/following
export const getOthersFollowing = async (
  userId: number,
): Promise<FollowResponse> => {
  try {
    const res = await GetAxiosInstance<FollowResponse>(
      `/v1/users/${userId}/following`,
    );

    return res.data.result;
  } catch (error) {
    console.log('특정유저의 팔로잉 목록 가져오기 에러', error);
    throw error;
  }
};

// 특정유저의 팔로워 목록 가져오기 /v1/users/{userId}/follower
export const getOthersFollower = async (
  userId: number,
): Promise<FollowResponse> => {
  try {
    const res = await GetAxiosInstance<FollowResponse>(
      `/v1/users/${userId}/follower`,
    );

    return res.data.result;
  } catch (error) {
    console.log('특정유저의 팔로워 목록 가져오기 에러', error);
    throw error;
  }
};
