interface Result {
  _OK: string;
}

// 팔로우하기
export interface FollowResponse {
  result: Result;
}

// 언팔로우하기
export interface UnfollowResponse {
  result: Result;
}
