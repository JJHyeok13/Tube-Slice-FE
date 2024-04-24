import React from 'react';

import styles from './styles';

import ExitButton from '@assets/loginModal/ExitButton.svg';

interface CompleteModalProps {
  setCompleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleFirstProfileSetting: () => void;
}

const CompleteModal: React.FC<CompleteModalProps> = ({
  setCompleteModalOpen,
  handleFirstProfileSetting,
}) => {
  const handleClose = () => {
    setCompleteModalOpen(false);
  };

  return (
    <styles.Modal>
      <styles.ExitButton src={ExitButton} alt="닫기" onClick={handleClose} />

      <styles.UpperWrapper>
        <styles.TubeSlice>Tube Slice</styles.TubeSlice>

        <div>
          <styles.Greeting>
            <span>반가워요! 정진혁 님</span>
            <span>어쩌구 저쩌구</span>
          </styles.Greeting>
          <styles.Question>바로 프로필을 설정하시겠어요?</styles.Question>
        </div>
      </styles.UpperWrapper>

      <styles.ButtonWrapper>
        <styles.YesButton onClick={handleFirstProfileSetting}>
          좋아요!
        </styles.YesButton>
        <styles.NoButton onClick={handleClose}>다음에 할게요.</styles.NoButton>
      </styles.ButtonWrapper>
    </styles.Modal>
  );
};

export default CompleteModal;
