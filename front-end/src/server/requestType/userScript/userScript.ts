// 스크립트 저장하기
export interface SaveScriptRequest {
  youtubeUrl: string;
  scriptKeywords: string[];
}

// 스크립트 수정하기
export interface UpdateScriptRequest {
  script: {
    timeline: number;
    text: string;
  }[];
  scriptKeywords: string[];
}

// 스크립트 강조하기
export interface HighlightScriptRequest {
  scripts: {
    textId: 0;
  }[];
}
