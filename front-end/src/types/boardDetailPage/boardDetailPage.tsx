export interface PostDataProps {
  postData: {
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
  };
}

export interface CommentDataProps {
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
