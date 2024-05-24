// 유저 정보 조회
export interface MyPageUserResponse {
  userId: number;
  nickname: string;
  profileUrl: string;
  introduction: string;
  followingNum: number;
  followerNum: number;
  isFollowing: boolean;
}

// 유저 키워드 목록 조회
export interface MyPageKeywordResponse {
  keywords: {
    keywordId: number;
    name: string;
  }[];
}

// 유저 게시글 목록 조회
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
  currentPage: number;
  totalElement: number;
  isFirst: boolean;
  isLast: boolean;
}
