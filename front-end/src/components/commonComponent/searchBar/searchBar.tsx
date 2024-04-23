import React, { useEffect, useRef, useState } from 'react';

import styles from './styles';

import MagnifierImage from '@assets/common/searchBarComponent/Magnifier.svg';

const SearchBar: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsClicked(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('검색어:', event.currentTarget.value);
    }
  };

  return (
    <styles.Container>
      <styles.Image
        src={MagnifierImage}
        alt="돋보기 아이콘"
        onClick={handleClick}
      />
      {isClicked && (
        <styles.InputBar
          ref={inputRef}
          show={isClicked}
          placeholder="검색어를 입력해주세요...."
          onKeyDown={handleKeyDown}
        />
      )}
    </styles.Container>
  );
};

export default SearchBar;
