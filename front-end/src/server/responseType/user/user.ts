interface Result {
  _OK: string;
}

export interface GetUserProfileResponse {
  userId: number;
  nickname: string;
  profileUrl: string;
  introduction: string;
}

// 유저 정보 수정
export interface UpdateUserProfileResponse {
  result: Result;
}

// 유저 탈퇴
export interface DeleteMemberResponse {
  result: Result;
}
