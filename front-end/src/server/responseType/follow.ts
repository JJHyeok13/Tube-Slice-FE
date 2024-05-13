export interface Users {
  userId: number;
  nickname: string;
  profileImage: string;
  isFollowing: boolean;
  introduction: string;
}

export interface FollowResult {
  followingNum: number;
  followerNum: number;
  users: Users[];
}

export interface FollowResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: FollowResult;
}

interface FollowUnfollowResult {
  result: string;
}

export interface FollowUnfollowResponse {
  isSuccess: string;
  code: string;
  message: string;
  result: FollowUnfollowResult;
}
