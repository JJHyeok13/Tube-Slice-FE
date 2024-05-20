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
