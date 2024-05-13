interface PostData {
  title: string;
  nickname: string;
  content: string;
  videoUrl: string;
  keywords: string[];
  commentNum: number;
  isMine: boolean;
  isLike: boolean;
  isFollowing: boolean;
}

export interface PostDataProps {
  postData: PostData;
}

interface Comment {
  commentId: number;
  userId: number;
  profileUrl: string;
  nickname: string;
  content: string;
  createdAt: string;
  isMine: boolean;
}

export interface CommentDataProps {
  commentData: Comment[];
}
