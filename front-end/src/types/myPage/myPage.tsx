interface Profile {
  userId: number;
  nickname: string;
  profileImage: string;
  introduction: string;
  following: number;
  follower: number;
}

export interface ProfileProps {
  profileData: Profile;
}

interface Keywords {
  id: number;
  name: string;
}

export interface KeywordsProps {
  keywordsData: Keywords[];
}

interface PostData {
  id: number;
  title: string;
  content: string;
  keywords: string[];
  createAt: string;
  commentCount: number;
  likeCount: number;
  url: string;
}

export interface PostListProps {
  postData: PostData[];
}
