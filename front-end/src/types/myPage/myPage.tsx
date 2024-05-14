export interface ProfileProps {
  profileData: {
    userId: number;
    nickname: string;
    profileUrl: string;
    introduction: string;
    followingNum: number;
    followerNum: number;
  };
}

export interface KeywordsProps {
  keywordsData: { keywordId: number; name: string }[];
}

export interface PostListProps {
  postData: {
    postId: number;
    title: string;
    content: string;
    videoUrl: string;
    keywords: { keywordId: number; name: string }[];
    likeNum: number;
    commentNum: number;
    createdAt: string;
  }[];
}
