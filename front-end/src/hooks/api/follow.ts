import {
  GetAxiosInstance,
  PostAxiosInstance,
  DeleteAxiosInstance,
} from '@axios/axios.method';

import {
  FollowResponse,
  FollowUnfollowResponse,
} from '@server/responseType/follow';

// 나의 팔로잉 목록 가져오기 /v1/users/me/following
export const getMyFollowing = async () => {
  const res = await GetAxiosInstance<FollowResponse>(`/v1/users/me/following`);

  return res.data;
};

// 나의 팔로워 목록 가져오기 /v1/users/me/follower
export const getMyFollower = async () => {
  const res = await GetAxiosInstance<FollowResponse>(`/v1/users/me/follower`);

  return res.data;
};

// 특정유저의 팔로잉 목록 가져오기 /v1/users/{userId}/following
export const getOthersFollower = async (userId: string) => {
  const res = await GetAxiosInstance<FollowResponse>(
    `/v1/users/${userId}/following`,
  );

  return res.data;
};

// 특정유저의 팔로워 목록 가져오기 /v1/users/{userId}/follower
export const getOthersFollowing = async (userId: string) => {
  const res = await GetAxiosInstance<FollowResponse>(
    `/v1/users/${userId}/follower`,
  );

  return res.data;
};

// 팔로우하기 /v1/follows/users/{userId}
export const doFollow = async (userId: string) => {
  const res = await PostAxiosInstance<FollowUnfollowResponse>(
    `/v1/follows/users/${userId}`,
  );

  return res.data;
};

// 팔로우 취소하기 /v1/follows/users/{userId}
export const doUnfollow = async (userId: string) => {
  const res = await DeleteAxiosInstance<FollowUnfollowResponse>(
    `/v1/follows/users/${userId}`,
  );

  return res.data;
};
