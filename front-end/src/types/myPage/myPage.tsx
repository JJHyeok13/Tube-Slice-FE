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
  postList: {
    postData: PostDataProps[];
    listSize: number;
    totalPage: number;
    totalElement: number;
    isFirst: boolean;
    isLast: boolean;
  };
  page: number;
  pageNumbers: number[];
  handlePageChange: React.Dispatch<React.SetStateAction<number>>;
}
