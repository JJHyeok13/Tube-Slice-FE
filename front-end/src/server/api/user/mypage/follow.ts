import { GetAxiosInstance } from '@axios/axios.method';

import { FollowResponse } from '@server/responseType/user/mypage/follow';

// 나의 팔로잉 목록 가져오기 /v1/users/me/following
export const getMyFollowing = async () => {
  const res = await GetAxiosInstance<FollowResponse>(`/v1/users/me/following`);

  console.log(res.data.result);
  return res.data.result.users;
};

// 나의 팔로워 목록 가져오기 /v1/users/me/follower
export const getMyFollower = async () => {
  const res = await GetAxiosInstance<FollowResponse>(`/v1/users/me/follower`);

  console.log(res.data.result);
  return res.data.result.users;
};

// 특정유저의 팔로잉 목록 가져오기 /v1/users/{userId}/following
export const getOthersFollowing = async (userId: number) => {
  const res = await GetAxiosInstance<FollowResponse>(
    `/v1/users/${userId}/following`,
  );

  console.log(res.data.result);
  return res.data.result.users;
};

// 특정유저의 팔로워 목록 가져오기 /v1/users/{userId}/follower
export const getOthersFollower = async (userId: number) => {
  const res = await GetAxiosInstance<FollowResponse>(
    `/v1/users/${userId}/follower`,
  );

  console.log(res.data.result);
  return res.data.result.users;
};
