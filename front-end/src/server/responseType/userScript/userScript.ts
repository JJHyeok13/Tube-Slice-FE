interface Result {
  _OK: string;
}

// 스크립트 저장하기
export interface SaveScriptResponse {
  result: Result;
}

// 스크립트 수정하기
export interface UpdateScriptResponse {
  result: Result;
}

// 스크립트 강조하기
export interface HighlightScriptResponse {
  result: Result;
}

// 스크립트 정보 가져오기
export interface GetScriptDataResponse {
  result: {
    userScriptId: number;
    youtubeUrl: string;
    youtubeTitle: string;
    subtitles: {
      timeline: number;
      sub: string;
    }[];
    scriptId: number;
    scripts: {
      timeline: number;
      text: string;
    }[];
    scriptKeywords: {
      keywordId: number;
      name: string;
    }[];
  };
}

// 스크립트 목록 가져오기
export interface GetScriptListResponse {
  scriptList: {
    userScriptId: number;
    youtubeUrl: string;
    youtubeTitle: string;
    subtitles: {
      timeline: number;
      sub: string;
    }[];
    scriptId: number;
    scripts: {
      timeline: number;
      text: string;
    }[];
    scriptKeywords: {
      keywordId: number;
      name: string;
    }[];
  };
}
