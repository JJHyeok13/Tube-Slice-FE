import React from 'react';
import styles from './styles';
import { KeywordsProps } from 'types/myPage/myPage';
import { useNavigate, useParams } from 'react-router-dom';

interface KeywordBoxProps extends KeywordsProps {
  getPostsByKeyword: (keyword: string) => void;
}

const KeywordBox: React.FC<KeywordBoxProps> = ({
  keywordsData,
  getPostsByKeyword,
}) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleTotalClick = () => {
    navigate(`/mypage/${id}`);
  };

  const handleKeywordClick = (keyword: string) => {
    navigate(`/mypage/${id}?keyword=${keyword}`);
    getPostsByKeyword(keyword);
  };

  return (
    <styles.Container>
      <styles.Title>키워드 목록</styles.Title>
      <styles.KeywordContainer>
        <styles.Keyword onClick={handleTotalClick}>전체보기</styles.Keyword>
        {keywordsData && keywordsData.length > 0 ? (
          keywordsData.map((keyword) => (
            <styles.Keyword
              key={keyword.keywordId}
              onClick={() => handleKeywordClick(keyword.name)}
            >
              {keyword.name}
            </styles.Keyword>
          ))
        ) : (
          <styles.Keyword style={{ cursor: 'auto' }}>
            생성된 키워드가 없습니다.
          </styles.Keyword>
        )}
      </styles.KeywordContainer>
    </styles.Container>
  );
};

export default KeywordBox;
