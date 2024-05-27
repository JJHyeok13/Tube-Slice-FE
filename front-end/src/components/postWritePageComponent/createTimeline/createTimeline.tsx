import React from 'react';

import styles from './styles';

interface CreateTimelineProps {
  onClose: () => void;
}

const CreateTimeline: React.FC<CreateTimelineProps> = ({ onClose }) => {
  const renderOptions = () => {
    const options = [];
    for (let i = 0; i < 60; i++) {
      const value = i < 10 ? `0${i}` : i;
      options.push(
        <option key={value} value={value}>
          {value}
        </option>,
      );
    }
    return options;
  };

  return (
    <styles.Modal>
      <styles.ExitButton onClick={onClose} />
      <styles.TimeContainer>
        <h3>타임라인</h3>
        <styles.TimeSelectContainer>
          <select>{renderOptions()}</select>:<select>{renderOptions()}</select>~
          <select>{renderOptions()}</select>:<select>{renderOptions()}</select>
        </styles.TimeSelectContainer>
      </styles.TimeContainer>
      <styles.DescriptionContainer>
        <h3>한줄 설명</h3>
        <styles.DescriptionInput
          type="text"
          placeholder="해당 타임라인에 대한 설명을 작성해주세요."
        />
      </styles.DescriptionContainer>
    </styles.Modal>
  );
};

export default CreateTimeline;
