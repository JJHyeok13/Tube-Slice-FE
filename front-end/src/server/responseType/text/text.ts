// 변환하기
export interface ConvertResponse {
  scripts: {
    timeline: number;
    text: string;
  }[];
}

// 요약하기
export interface SummarizeResponse {
  summaries: {
    id: number;
    message: string;
  }[];
}
