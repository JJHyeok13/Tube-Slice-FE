export interface PostData {
  id: number;
  title: string;
  content: string;
  image: string;
  createdAt: string;
  commentCount: number;
  heartCount: number;
  writer: string;
  profileImage: string;
}

export interface PostDataProps {
  postData: PostData[];
}
