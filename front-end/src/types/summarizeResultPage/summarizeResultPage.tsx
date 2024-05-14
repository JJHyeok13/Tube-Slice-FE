export interface SummarizeResultProps {
  resultData: {
    summarizes: { summarizeId: number; summarize: string }[];
    video: { videoId: number; url: string };
  };
}
