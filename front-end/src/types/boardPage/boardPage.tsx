export interface PostDataProps {
  postData: {
    id: number;
    title: string;
    content: string;
    image: string;
    createdAt: string;
    commentCount: number;
    heartCount: number;
    writer: string;
    profileImage: string;
  }[];
}
