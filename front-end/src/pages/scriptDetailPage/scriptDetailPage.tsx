import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SubTitleContainer from '@components/convertResultPageComponent/subTitleContainer/subTitleContainer';
import YoutubeVideo from '@components/convertResultPageComponent/youtubeVideo/youtubeVideo';
import ScriptContainer from '@components/convertResultPageComponent/scriptContainer/scriptContainer';

import styles from './styles';

const ScriptDetailPage: React.FC = () => {
  const { id } = useParams<string>();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const [keywordInput, setKeywordInput] = useState<string>('');
  const [keywords, setKeywords] = useState<string[]>([]);

  const handleKeywordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setKeywordInput(e.target.value);
  };

  const handleKeywordKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keywordInput.trim()) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput('');
      e.preventDefault();
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setKeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <styles.Container>
      <styles.LeftWrapper>
        <YoutubeVideo youtubeUrl={extractedYoutubeUrl} />
        <SubTitleContainer subtitles={subtitles} />
      </styles.LeftWrapper>

      <styles.RightWrapper>
        <styles.MenuWrapper>
          <styles.KeywordContainer>
            <div>
              {keywords.map((keyword, index) => (
                <styles.Keyword
                  key={index}
                  onClick={() => removeKeyword(keyword)}
                >
                  {keyword}
                </styles.Keyword>
              ))}
            </div>
            <styles.KeywordInput
              type="text"
              placeholder="키워드를 입력해주세요..."
              value={keywordInput}
              onChange={handleKeywordInput}
              onKeyPress={handleKeywordKeyPress}
              onFocus={showModal}
              onBlur={hideModal}
            />
            {isModalVisible && (
              <styles.Modal isVisible={isModalVisible}>
                <div>엔터를 입력하여 키워드를 등록할 수 있습니다.</div>
                <div>등록된 키워드를 클릭하면 해당 키워드가 삭제됩니다.</div>
              </styles.Modal>
            )}
          </styles.KeywordContainer>
          <styles.SaveButton onClick={SaveScript}>저장하기</styles.SaveButton>
          <styles.SaveButton>수정하기</styles.SaveButton>
          <styles.SaveButton>강조하기</styles.SaveButton>
        </styles.MenuWrapper>
        <ScriptContainer scripts={scripts} subtitles={subtitles} />
      </styles.RightWrapper>
    </styles.Container>
  );
};

export default ScriptDetailPage;
