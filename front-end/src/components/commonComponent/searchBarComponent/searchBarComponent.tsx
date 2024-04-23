import React, { useState } from 'react';

import styles from './styles';

import MagnifierImage from '@assets/common/searchBarComponent/Magnifier.svg';

const SearchBarComponent: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <styles.Container>
      <img src={MagnifierImage} alt="돋보기 아이콘" onClick={handleClick} />
      {isClicked && <styles.InputBar placeholder="검색어를 입력해주세요...." />}
    </styles.Container>
  );
};

export default SearchBarComponent;
