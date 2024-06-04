// 변환하기
export interface ConvertResponse {
  result: {
    scripts: {
      timeline: number;
      text: string;
    }[];
  };
}

// 요약하기
export interface SummarizeResponse {
  result: {
    id: number;
    message: string;
  }[];
}
