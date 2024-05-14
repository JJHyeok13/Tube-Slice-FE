export interface FollowListProps {
  followData: {
    userId: number;
    nickname: string;
    profileUrl: string;
    introduction: string;
    isFollowing: boolean;
  }[];
}
