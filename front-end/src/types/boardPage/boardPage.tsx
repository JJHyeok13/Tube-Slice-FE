interface PostData {
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

export type PostDataProps = {
  postData: PostData[];
};
