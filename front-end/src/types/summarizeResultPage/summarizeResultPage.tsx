interface Summarize {
  summarizeId: number;
  summarize: string;
}

interface Video {
  videoId: number;
  url: string;
}

interface ResultData {
  summarizes: Summarize[];
  video: Video;
}

export interface SummarizeProps {
  resultData: ResultData;
}
