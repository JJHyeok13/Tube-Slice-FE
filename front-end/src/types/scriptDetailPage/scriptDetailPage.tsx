export interface ScriptDetailDataProps {
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
      textId: number;
      timeline: number;
      text: string;
      isHighlighted: boolean;
    }[];
    scriptKeywords: {
      keywordId: number;
      name: string;
    }[];
  };
}
