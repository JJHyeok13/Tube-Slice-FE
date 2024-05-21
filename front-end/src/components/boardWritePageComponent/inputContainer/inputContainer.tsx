import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import styles from './styles';

interface PostDataProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  videoUrl: string;
  setVideoUrl: React.Dispatch<React.SetStateAction<string>>;
  keywordInput: string;
  setKeywordInput: React.Dispatch<React.SetStateAction<string>>;
  keywords: string[];
  setKeywords: React.Dispatch<React.SetStateAction<string[]>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const InputContainer: React.FC<PostDataProps> = ({
  title,
  setTitle,
  videoUrl,
  setVideoUrl,
  keywordInput,
  setKeywordInput,
  keywords,
  setKeywords,
  content,
  setContent,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleVideoUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
  };

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

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <styles.Container>
      <styles.TitleInput
        type="text"
        placeholder="제목을 입력해주세요..."
        value={title}
        onChange={handleTitle}
      />
      <styles.VideoUrlInput
        type="url"
        placeholder="유튜브 영상의 주소를 입력해주세요..."
        value={videoUrl}
        onChange={handleVideoUrl}
      />
      <styles.KeywordContainer>
        <div>
          {keywords.map((keyword, index) => (
            <styles.Keyword key={index} onClick={() => removeKeyword(keyword)}>
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

      <styles.ContentInput
        placeholder="내용을 입력해주세요..."
        value={content}
        onChange={handleContent}
      />
      <styles.ButtonContainer>
        <styles.CancelButton>취소</styles.CancelButton>
        <styles.PostButton>작성</styles.PostButton>
      </styles.ButtonContainer>
    </styles.Container>
  );
};

export default InputContainer;
