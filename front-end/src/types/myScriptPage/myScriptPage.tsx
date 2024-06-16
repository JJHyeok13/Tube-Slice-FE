export interface ScriptListProps {
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
  }[];
}

export interface KeywordListProps {
  script_keywords: {
    keyword: string;
  }[];
}
