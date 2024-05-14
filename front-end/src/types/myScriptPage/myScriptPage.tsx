export interface KeywordDataProps {
  keywordData: { id: number; keyword: string }[];
}

export interface ScriptComponentProps {
  scriptData: {
    id: number;
    url: string;
    title: string;
    content: string;
    keyword: string[];
  }[];
}
