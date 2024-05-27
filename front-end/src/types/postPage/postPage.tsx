export interface PostDataProps {
  postData: {
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
