import { PostAxiosInstance, DeleteAxiosInstance } from '@axios/axios.method';
import {
  PostLikeResponse,
  PostUnLikeResponse,
} from '@server/responseType/postLike/postLike';

// 게시글 좋아요 /v1/post-likes/posts/{postId}
export const postLike = async (postId: number) => {
  try {
    const res = await PostAxiosInstance<PostLikeResponse>(
      `/v1/post-likes/posts/${postId}`,
    );

    return res.data.result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// 게시글 좋아요 취소 /v1/post-likes/posts/{postId}
export const postUnlike = async (postId: number) => {
  try {
    const res = await DeleteAxiosInstance<PostUnLikeResponse>(
      `/v1/post-likes/posts/${postId}`,
    );

    return res.data.result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
