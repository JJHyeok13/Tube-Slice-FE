import React from 'react';

import styles from './styles';

import ExitButton from '@assets/loginModal/ExitButton.svg';

interface ProfileSettingModalProps {
  setProfileSettingModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileSettingModal: React.FC<ProfileSettingModalProps> = ({
  setProfileSettingModalOpen,
}) => {
  const handleClose = () => {
    setProfileSettingModalOpen(false);
  };

  return (
    <styles.Modal>
      <styles.ExitButton src={ExitButton} alt="닫기" onClick={handleClose} />

      <styles.TubeSlice>Tube Slice</styles.TubeSlice>
    </styles.Modal>
  );
};

export default ProfileSettingModal;
