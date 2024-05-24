interface Result {
  _OK: string;
}

// 게시글 생성
export interface CreatePostResponse {
  result: Result;
}

// 게시글 삭제
export interface DeletePostResponse {
  result: Result;
}

// 게시글 수정
export interface UpdatePostResponse {
  result: Result;
}

// 게시글 상세 정보 조회
export interface PostDataResponse {
  isMine: boolean;
  isLike: boolean;
  post: {
    writer: {
      userId: number;
      nickname: string;
      profileUrl: string;
      isFollowing: boolean;
    };
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
  };
}

// 게시글의 댓글 목록 조회
export interface PostCommentResponse {
  comments: {
    user: {
      userId: number;
      nickname: string;
      profileUrl: string;
      isMine: boolean;
    };
    commentId: number;
    content: string;
    createdAt: string;
  }[];
}

// 게시글 목록 조회
export interface PostListResponse {
  posts: {
    user: {
      userId: number;
      nickname: string;
      profileUrl: string;
    };
    postId: number;
    title: string;
    content: string;
    videoUrl: string;
    likeNum: number;
    commentNum: number;
    createdAt: string;
  }[];
}
