interface Option {
  value: string;
  label: string;
}

export interface SearchBarProps {
  options?: Option[];
  selectedOption?: string;
}
