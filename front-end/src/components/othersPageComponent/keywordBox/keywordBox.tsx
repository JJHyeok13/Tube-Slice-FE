import React from 'react';
import styles from './styles';
import { KeywordsProps } from 'types/myPage/myPage';

const KeywordBox: React.FC<KeywordsProps> = ({ keywordsData }) => {
  return (
    <styles.Container>
      <styles.Title>키워드 목록</styles.Title>
      <styles.KeywordContainer>
        {keywordsData && keywordsData.length > 0 ? (
          keywordsData.map((keyword) => (
            <styles.Keyword key={keyword.keywordId}>
              {keyword.name}
            </styles.Keyword>
          ))
        ) : (
          <styles.Keyword>생성된 키워드가 없습니다.</styles.Keyword>
        )}
      </styles.KeywordContainer>
    </styles.Container>
  );
};

export default KeywordBox;
