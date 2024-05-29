export interface ProfileProps {
  profileData: {
    userId: number;
    nickname: string;
    profileUrl: string;
    introduction: string;
    followingNum: number;
    followerNum: number;
    isFollowing: boolean;
  };
}

export interface KeywordsProps {
  keywordsData: { keywordId: number; name: string }[];
}

export interface PostDataProps {
  postId: number;
  title: string;
  content: string;
  videoUrl: string;
  keywords: { keywordId: number; name: string }[];
  likeNum: number;
  commentNum: number;
  createdAt: string;
}

export interface PostListProps {
  // posts: {
  //   postId: number;
  //   title: string;
  //   content: string;
  //   videoUrl: string;
  //   keywords: {
  //     keywordId: number;
  //     name: string;
  //   }[];
  //   likeNum: number;
  //   commentNum: number;
  //   createdAt: string;
  // }[];
  posts: PostDataProps[];
  listSize: number;
  totalPage: number;
  currentPage: number;
  totalElement: number;
  isFirst: boolean;
  isLast: boolean;
}
