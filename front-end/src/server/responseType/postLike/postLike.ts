interface Result {
  _OK: string;
}

// 게시글 좋아요
export interface PostLikeResponse {
  result: Result;
}

// 게시글 좋아요 취소
export interface PostUnLikeResponse {
  result: Result;
}
