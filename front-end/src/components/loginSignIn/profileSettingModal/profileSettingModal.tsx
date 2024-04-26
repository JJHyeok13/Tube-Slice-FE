import React from 'react';

import styles from './styles';

import ExitButton from '@assets/loginModal/ExitButton.svg';
import BasicProfileImage from '@assets/loginModal/BasicProfileImage.svg';

interface ProfileSettingModalProps {
  setProfileSettingModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileSettingModal: React.FC<ProfileSettingModalProps> = ({
  setProfileSettingModalOpen,
  setIsLoggedIn,
}) => {
  const handleClose = () => {
    setProfileSettingModalOpen(false);
  };

  const handleComplete = () => {
    setIsLoggedIn(true);
    setProfileSettingModalOpen(false);
  };

  return (
    <styles.Modal>
      <styles.ExitButton src={ExitButton} alt="닫기" onClick={handleClose} />

      <styles.TubeSlice>Tube Slice</styles.TubeSlice>
      <styles.InputWrapper>
        <b>프로필 사진</b>
        <div>
          <styles.ProfileImage src={BasicProfileImage} alt="기본 이미지" />
          <input type="file" />
        </div>
      </styles.InputWrapper>

      <styles.InputWrapper>
        <b>이름</b>
        <styles.TextInput type="text" />
      </styles.InputWrapper>

      <styles.InputWrapper>
        <b>닉네임</b>
        <styles.TextInput type="text" />
      </styles.InputWrapper>

      <styles.ButtonWrapper>
        <styles.YesButton onClick={handleComplete}>완료</styles.YesButton>
        <styles.NoButton onClick={handleClose}>취소</styles.NoButton>
      </styles.ButtonWrapper>
    </styles.Modal>
  );
};

export default ProfileSettingModal;
