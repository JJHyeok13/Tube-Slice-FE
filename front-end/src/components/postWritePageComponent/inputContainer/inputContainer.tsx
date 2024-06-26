import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import styles from './styles';
import CreateTimeline from '../createTimeline/createTimeline';

interface PostDataProps {
  title: string;
  handleTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  youtubeUrl: string;
  handleYoutubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  keywordInput: string;
  handleKeywordInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeywordKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void;
  removeKeyword: (keywordToRemove: string) => void;
  keywords: string[];
  content: string;
  handleContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleStartTime: (hour: number, minute: number, second: number) => void;
  handleEndTime: (hour: number, minute: number, second: number) => void;
  handleSubmit: () => void;
}

const InputContainer: React.FC<PostDataProps> = ({
  title,
  handleTitle,
  youtubeUrl,
  handleYoutubeUrl,
  keywordInput,
  handleKeywordInput,
  handleKeywordKeyPress,
  removeKeyword,
  keywords,
  content,
  handleContent,
  handleStartTime,
  handleEndTime,
  handleSubmit,
}) => {
  const [timelineVisible, setTimelineVisible] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const showTimelineModal = () => {
    setTimelineVisible(true);
  };

  const hideTimelineModal = () => {
    setTimelineVisible(false);
  };

  return (
    <styles.Container>
      <styles.TitleInput
        type="text"
        placeholder="제목을 입력해주세요..."
        value={title}
        onChange={handleTitle}
      />
      <styles.VideoInputContainer>
        <styles.VideoUrlInput
          type="url"
          placeholder="유튜브 영상의 주소를 입력해주세요..."
          value={youtubeUrl}
          onChange={handleYoutubeUrl}
        />
        {youtubeUrl && (
          <styles.TimelineCreateButton
            onClick={showTimelineModal}
            size={24}
            fill="#0075ff"
          />
        )}
      </styles.VideoInputContainer>

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
        <styles.PostButton onClick={handleSubmit}>작성</styles.PostButton>
      </styles.ButtonContainer>
      {timelineVisible && (
        <CreateTimeline
          onClose={hideTimelineModal}
          handleStartTime={handleStartTime}
          handleEndTime={handleEndTime}
        />
      )}
    </styles.Container>
  );
};

export default InputContainer;
