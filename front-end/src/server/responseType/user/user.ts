interface Result {
  _OK: string;
}

// 유저 정보 수정
export interface UpdateUserProfileResponse {
  result: Result;
}

// 유저 탈퇴
export interface DeleteMemberResponse {
  result: Result;
}
