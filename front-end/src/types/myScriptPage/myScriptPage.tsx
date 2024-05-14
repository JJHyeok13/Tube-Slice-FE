export interface KeywordDropdownProps {
  keywordData: { id: number; keyword: string }[];
}

export interface ScriptProps {
  scriptData: {
    id: number;
    url: string;
    title: string;
    content: string;
    keyword: string[];
  }[];
}
