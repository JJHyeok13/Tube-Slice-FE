export interface WriteCommentResponse {
  commentId: number;
}

interface Result {
  _OK: string;
}

export interface DeleteCommentResponse {
  result: Result;
}

export interface UpdateCommentResponse {
  result: Result;
}
