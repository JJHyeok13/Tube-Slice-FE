interface Result {
  _OK: string;
}

// 댓글 작성
export interface WriteCommentResponse {
  result: Result;
}

// 댓글 삭제
export interface DeleteCommentResponse {
  result: Result;
}

// 댓글 수정
export interface UpdateCommentResponse {
  result: Result;
}
