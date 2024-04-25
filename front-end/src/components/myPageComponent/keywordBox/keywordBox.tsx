import React from 'react';

import styles from './styles';

const KeywordBox: React.FC = () => {
  return (
    <styles.Container>
      <styles.Title>키워드 목록</styles.Title>
      <styles.KeywordContainer>
        <styles.Keyword>아스날</styles.Keyword>
        <styles.Keyword>맨시티</styles.Keyword>
        <styles.Keyword>리버풀</styles.Keyword>
      </styles.KeywordContainer>
    </styles.Container>
  );
};

export default KeywordBox;
