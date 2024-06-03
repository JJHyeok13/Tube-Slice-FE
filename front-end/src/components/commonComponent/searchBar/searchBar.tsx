import React, { useEffect, useState } from 'react';

export interface SearchBarProps {
  options: { value: string; label: string }[];
  onSearch: (searchType: string, keyword: string) => void;
}

import styles from './styles';
import MagnifierImage from '@assets/common/searchBarComponent/Magnifier.svg';
import useDebounce from 'hooks/useDebounce';

const SearchBar: React.FC<SearchBarProps> = ({ options, onSearch }) => {
  const [selectedSearchType, setSelectedSearchType] = useState(
    options.length > 0 ? options[0].value : '',
  );
  const [searchWord, setSearchWord] = useState('');
  const debouncedSearchWord = useDebounce(searchWord, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSearchType(event.target.value);
  };

  const handleChangeSearchWord = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchWord(event.target.value);
  };

  useEffect(() => {
    onSearch(selectedSearchType, debouncedSearchWord);
  }, [debouncedSearchWord, selectedSearchType]);

  return (
    <styles.Container>
      {options.length > 0 && (
        <styles.OptionContainer>
          {options.map((option) => (
            <styles.Option key={option.value}>
              <input
                type="radio"
                name="searchRadio"
                value={option.value}
                checked={selectedSearchType === option.value}
                onChange={handleChange}
              />
              {option.label}
            </styles.Option>
          ))}
        </styles.OptionContainer>
      )}

      <styles.SearchBarContainer>
        <styles.Image src={MagnifierImage} alt="돋보기 아이콘" />
        <styles.InputBar
          placeholder="검색어를 입력해주세요...."
          value={searchWord}
          onChange={handleChangeSearchWord}
        />
      </styles.SearchBarContainer>
    </styles.Container>
  );
};

export default SearchBar;
