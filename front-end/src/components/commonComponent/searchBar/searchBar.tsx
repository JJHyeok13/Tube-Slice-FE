import React, { useState } from 'react';

import { SearchBarProps } from 'types/common/searchBar';

import styles from './styles';

import MagnifierImage from '@assets/common/searchBarComponent/Magnifier.svg';
import useDebounce from 'hooks/useDebounce';

const SearchBar: React.FC<SearchBarProps> = ({ options }) => {
  const [selectedSearchType, setSelectedSearchType] = useState(
    options && options.length > 0 ? options[0].value : '',
  );
  const [searchWord, setSearchWord] = useState('');
  const DebouncedSearchWord = useDebounce(searchWord, 1000);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSearchType(event.target.value);
  };

  const handleChangeSearchWord = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchWord(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchWord !== '') {
      handleClick();
    }
  };

  const handleClick = () => {
    console.log('검색어:', DebouncedSearchWord);
    console.log('선택된 검색 타입:', selectedSearchType);

    setSearchWord('');
  };

  return (
    <styles.Container>
      {options && options.length > 0 && (
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
        <styles.InputBar
          placeholder="검색어를 입력해주세요...."
          value={searchWord}
          onChange={handleChangeSearchWord}
          onKeyDown={handleKeyDown}
        />
        <styles.Image
          src={MagnifierImage}
          alt="돋보기 아이콘"
          onClick={handleClick}
        />
      </styles.SearchBarContainer>
    </styles.Container>
  );
};

export default SearchBar;
