interface UserResponse {
  userId: number;
  nickname: string;
  profileUrl: string;
  introduction: string;
  followingNum: number;
  followerNum: number;
}

export interface MyPageUserResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: UserResponse;
}

interface Keywords {
  keywordId: number;
  name: string;
}

interface PostResponse {
  postId: number;
  title: string;
  content: string;
  videoUrl: string;
  keywords: Keywords[];
  likeNum: number;
  commentNum: number;
  createdAt: string;
}

export interface MyPagePostResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: PostResponse[];
}

interface KeywordResponse {
  keywordId: number;
  name: string;
}

interface KeywordResult {
  keywords: KeywordResponse[];
}

export interface MyPageKeywordResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: KeywordResult;
}
