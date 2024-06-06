export interface CreatePostRequest {
  title: string;
  content: string;
  youtubeUrl: string;
  postKeywords: string[];
  timelineDtoList: {
    startTime: number;
    endTime: number;
    description: string;
  }[];
}
