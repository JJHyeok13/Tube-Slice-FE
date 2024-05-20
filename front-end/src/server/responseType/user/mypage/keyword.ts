export interface KeywordBasedPostResponse {
  posts: {
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
  }[];
  listSize: number;
  totalPage: number;
  totalElement: number;
  isFirst: boolean;
  isLast: boolean;
}
