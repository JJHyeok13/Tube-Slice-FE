// 팔로우/팔로워 목록 조회
export interface FollowResponse {
  users: {
    userId: number;
    nickname: string;
    profileUrl: string;
    introduction: string;
    isFollowing: boolean;
  }[];
  followingNum: number;
  followerNum: number;
}
