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
    keywords: [
      {
        keywordId: number;
        name: string;
      },
    ];
    likeNum: number;
    commentNum: number;
    createdAt: string;
  };
}

interface PostComment {
  user: {
    userId: number;
    nickname: string;
    profileUrl: string;
    isMine: boolean;
  };
  commentId: number;
  content: string;
  createdAt: string;
}

export type PostCommentResponse = PostComment[];

interface PostList {
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
}

export type PostListResponse = PostList[];
