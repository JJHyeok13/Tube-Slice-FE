export interface MyPageUserResponse {
  userId: number;
  nickname: string;
  profileUrl: string;
  introduction: string;
  followingNum: number;
  followerNum: number;
  isFollowing: boolean;
}

export interface MyPageKeywordResponse {
  keywords: {
    keywordId: number;
    name: string;
  }[];
}

export interface MyPagePostResponse {
  posts: {
    postId: number;
    title: string;
    content: string;
    videoUrl: string;
    keywords: {
      keywordId: number;
      name: string;
    }[];
    likeNum: number;
    commentNum: number;
    createdAt: string;
  }[];
  listSize: number;
  totalPage: number;
  totalElement: number;
  isFirst: boolean;
  isLast: boolean;
}
