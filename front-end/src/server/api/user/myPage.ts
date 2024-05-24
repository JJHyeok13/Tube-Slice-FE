import { GetAxiosInstance } from '@axios/axios.method';

import {
  MyPageUserResponse,
  MyPagePostResponse,
  MyPageKeywordResponse,
} from '@server/responseType/user/mypage';

// 마이페이지용 유저정보 가져오기 /v1/users/me/mypage
export const getMyPageInfo = async (): Promise<MyPageUserResponse> => {
  try {
    const res = await GetAxiosInstance<MyPageUserResponse>(
      `/v1/users/me/mypage`,
    );

    return res.data.result;
  } catch (error) {
    console.log('나의 유저정보 가져오기 에러', error);
    throw error;
  }
};

// 마이페이지용 나의 게시글 목록 가져오기 /v1/users/me/mypage/posts
export const getMyPagePost = async (
  page: number,
  size: number,
): Promise<MyPagePostResponse> => {
  try {
    const res = await GetAxiosInstance<MyPagePostResponse>(
      `/v1/users/me/mypage/posts?page=${page}&size=${size}`,
    );

    return res.data.result;
  } catch (error) {
    console.log('나의 게시글 목록 가져오기 에러', error);
    throw error;
  }
};

// 나의 키워드 기반 게시글 가져오기 /v1/users/me/posts
export const getMyKeywordBasedPost = async (
  keyword: string,
  page: number,
  size: number,
): Promise<MyPagePostResponse> => {
  try {
    const res = await GetAxiosInstance<MyPagePostResponse>(
      `/v1/users/me/posts?keyword=${keyword}&page=${page}&size=${size}`,
    );

    return res.data.result;
  } catch (error) {
    console.log('나의 키워드 기반 게시글 목록 가져오기 에러', error);
    throw error;
  }
};

// 나의 키워드 목록 가져오기 /v1/users/me/mypage/keywords
export const getMyPageKeyword = async (): Promise<MyPageKeywordResponse> => {
  try {
    const res = await GetAxiosInstance<MyPageKeywordResponse>(
      `/v1/users/me/mypage/keywords`,
    );

    return res.data.result;
  } catch (error) {
    console.log('나의 키워드 목록 가져오기 에러', error);
    throw error;
  }
};

// 마이페이지용 특정유저정보 가져오기 /v1/users/{userId}/mypage
export const getOthersPageInfo = async (
  userId: number,
): Promise<MyPageUserResponse> => {
  try {
    const res = await GetAxiosInstance<MyPageUserResponse>(
      `v1/users/${userId}/mypage`,
    );
    return res.data.result;
  } catch (error) {
    console.log('타인 유저정보 가져오기 에러', error);
    throw error;
  }
};

// 마이페이지용 특정유저의 게시글 목록 가져오기 /v1/users/{userId}/mypage/posts
export const getOthersPagePost = async (
  userId: number,
  page: number,
  size: number,
): Promise<MyPagePostResponse> => {
  try {
    const res = await GetAxiosInstance<MyPagePostResponse>(
      `/v1/users/${userId}/mypage/posts?page=${page}&size=${size}`,
    );

    return res.data.result;
  } catch (error) {
    console.log('타인 게시글 목록 가져오기 에러', error);
    throw error;
  }
};

// 특정유저의 키워드 기반 게시글 가져오기 /v1/users/{userId}/posts
export const getOthersKeywordBasedPost = async (
  userId: number,
  keyword: string,
  page: number,
  size: number,
): Promise<MyPagePostResponse> => {
  try {
    const res = await GetAxiosInstance<MyPagePostResponse>(
      `/v1/users/${userId}/posts?keyword=${keyword}&page=${page}&size=${size}`,
    );

    return res.data.result;
  } catch (error) {
    console.log('타인 키워드 기반 게시글 목록 가져오기 에러', error);
    throw error;
  }
};

// 특정유저의 키워드 목록 가져오기 /v1/users/{userId}/mypage/keywords
export const getOthersPageKeyword = async (
  userId: number,
): Promise<MyPageKeywordResponse> => {
  try {
    const res = await GetAxiosInstance<MyPageKeywordResponse>(
      `/v1/users/${userId}/mypage/keywords`,
    );

    return res.data.result;
  } catch (error) {
    console.log('타인 키워드 목록 가져오기 에러', error);
    throw error;
  }
};
