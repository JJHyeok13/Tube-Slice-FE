export interface Users {
  followData: {
    userId: number;
    nickname: string;
    profileUrl: string;
    introduction: string;
    isFollowing: boolean;
  }[];
}
