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
  };
}

export interface CommentDataProps {
  commentData: {
    commentId: number;
    userId: number;
    profileUrl: string;
    nickname: string;
    content: string;
    createdAt: string;
    isMine: boolean;
  }[];
}
