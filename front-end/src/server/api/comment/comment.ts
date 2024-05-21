import {
  PostAxiosInstance,
  DeleteAxiosInstance,
  PatchAxiosInstance,
} from '@axios/axios.method';

import {
  UpdateCommentRequest,
  WriteCommentRequest,
} from '@server/requestType/comment/comment';

import {
  DeleteCommentResponse,
  UpdateCommentResponse,
  WriteCommentResponse,
} from '@server/responseType/comment/comment';

// 댓글 달기 /v1/comments/posts/{postId}
export const writeComment = async (
  postId: number,
  data: WriteCommentRequest,
): Promise<WriteCommentResponse> => {
  try {
    const res = await PostAxiosInstance<WriteCommentResponse>(
      `/v1/comments/posts/${postId}`,
      data,
    );

    return res.data.result;
  } catch (error) {
    console.log('댓글 작성 에러', error);
    throw error;
  }
};

// 댓글 삭제 /v1/comments/{commentId}
export const deleteComment = async (
  commentId: number,
): Promise<DeleteCommentResponse> => {
  try {
    const res = await DeleteAxiosInstance<DeleteCommentResponse>(
      `/v1/comments/${commentId}`,
    );

    return res.data.result;
  } catch (error) {
    console.log('댓글 삭제 에러', error);
    throw error;
  }
};

// 댓글 수정 /v1/comments/{commentId}
export const UpdateComment = async (
  commentId: number,
  data: UpdateCommentRequest,
): Promise<UpdateCommentResponse> => {
  try {
    const res = await PatchAxiosInstance<UpdateCommentResponse>(
      `/v1/comments/${commentId}`,
      data,
    );

    return res.data.result;
  } catch (error) {
    console.log('댓글 수정 에러', error);
    throw error;
  }
};
