import { GetAxiosInstance } from '@axios/axios.method';

import { KeywordBasedPostResponse } from '@server/responseType/user/mypage/keyword';

// 나의 키워드 기반 게시글 가져오기 /v1/users/me/posts
export const getMyKeywordBasedPost = async (
  keyword: string,
  page: number,
  size: number,
) => {
  const res = await GetAxiosInstance<KeywordBasedPostResponse>(
    `/v1/users/me/posts?keyword=${keyword}&page=${page}&size=${size}`,
  );

  return res.data.result;
};

// 특정유저의 키워드 기반 게시글 가져오기 /v1/users/{userId}/posts
export const getOthersKeywordBasedPost = async (
  userId: number,
  keyword: string,
  page: number,
  size: number,
) => {
  const res = await GetAxiosInstance<KeywordBasedPostResponse>(
    `/v1/users/${userId}/posts?keyword=${keyword}&page=${page}&size=${size}`,
  );

  return res.data.result;
};
