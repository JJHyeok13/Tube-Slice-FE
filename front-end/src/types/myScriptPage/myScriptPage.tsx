interface KeywordData {
  id: number;
  keyword: string;
}

export interface KeywordDataProps {
  keywordData: KeywordData[];
}

interface ScriptData {
  id: number;
  url: string;
  title: string;
  content: string;
  keyword: string[];
}

export interface ScriptComponentProps {
  scriptData: ScriptData[];
}
