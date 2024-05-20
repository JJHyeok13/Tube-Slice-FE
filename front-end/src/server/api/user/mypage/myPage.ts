import { GetAxiosInstance } from '@axios/axios.method';

import {
  MyPageUserResponse,
  MyPagePostResponse,
  MyPageKeywordResponse,
} from '@server/responseType/user/mypage/mypage';

// 마이페이지용 유저정보 가져오기 /v1/users/me/mypage
export const getMyPageInfo = async () => {
  const res = await GetAxiosInstance<MyPageUserResponse>(`/v1/users/me/mypage`);

  return res.data.result;
};

// 마이페이지용 나의 게시글 목록 가져오기 /v1/users/me/mypage/posts
export const getMyPagePost = async (page: number, size: number) => {
  const res = await GetAxiosInstance<MyPagePostResponse>(
    `/v1/users/me/mypage/posts?page=${page}&size=${size}`,
  );

  return res.data.result;
};

// 나의 키워드 목록 가져오기 /v1/users/me/mypage/keywords
export const getMyPageKeyword = async () => {
  const res = await GetAxiosInstance<MyPageKeywordResponse>(
    `/v1/users/me/mypage/keywords`,
  );

  return res.data.result;
};

// 마이페이지용 특정유저정보 가져오기 /v1/users/{userId}/mypage
export const getOthersPageInfo = async (userId: number) => {
  const res = await GetAxiosInstance<MyPageUserResponse>(
    `v1/users/${userId}/mypage`,
  );

  return res.data.result;
};

// 마이페이지용 특정유저의 게시글 목록 가져오기 /v1/users/{userId}/mypage/posts
export const getOthersPagePost = async (
  userId: number,
  page: number,
  size: number,
) => {
  const res = await GetAxiosInstance<MyPagePostResponse>(
    `/v1/users/${userId}/mypage/posts?page=${page}&size=${size}`,
  );

  return res.data.result;
};

// 특정유저의 키워드 목록 가져오기 /v1/users/{userId}/mypage/keywords
export const getOthersPageKeyword = async (userId: number) => {
  const res = await GetAxiosInstance<MyPageKeywordResponse>(
    `/v1/users/${userId}/mypage/keywords`,
  );

  return res.data.result;
};
