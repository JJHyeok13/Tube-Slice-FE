export interface SearchBarProps {
  options?: { value: string; label: string }[];
  selectedOption?: string;
  onSearch: (searchType: string, keyword: string) => void;
}
