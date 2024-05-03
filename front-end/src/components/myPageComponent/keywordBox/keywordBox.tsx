import React from 'react';

import styles from './styles';

import { KeywordsProps } from 'types/myPage/myPage';

const KeywordBox: React.FC<KeywordsProps> = ({ keywordsData }) => {
  return (
    <styles.Container>
      <styles.Title>키워드 목록</styles.Title>
      <styles.KeywordContainer>
        {keywordsData.map((keyword) => (
          <styles.Keyword key={keyword.id}>{keyword.name}</styles.Keyword>
        ))}
      </styles.KeywordContainer>
    </styles.Container>
  );
};

export default KeywordBox;
