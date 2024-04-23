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

      <styles.TubeSlice>Tube Slice</styles.TubeSlice>

      <div onClick={handleFirstProfileSetting}>예</div>
      <div>아니오</div>
    </styles.Modal>
  );
};

export default CompleteModal;
