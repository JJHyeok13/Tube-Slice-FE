import React from 'react';

import styles from './styles';

import ExitButton from '@assets/loginModal/ExitButton.svg';
import BasicProfileImage from '@assets/loginModal/BasicProfileImage.svg';
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const SettingContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

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

      <Container>
        <styles.TubeSlice>Tube Slice</styles.TubeSlice>
        <SettingContainer>
          <div>
            <div>프로필 사진</div>
            <img src={BasicProfileImage} alt="기본 이미지" />
          </div>

          <div>
            <div>이름</div>
            <input type="text" />
          </div>

          <div>
            <div>닉네임</div>
            <input type="text" />
          </div>

          <styles.ButtonWrapper>
            <styles.YesButton>완료</styles.YesButton>
            <styles.NoButton onClick={handleClose}>취소</styles.NoButton>
          </styles.ButtonWrapper>
        </SettingContainer>
      </Container>
    </styles.Modal>
  );
};

export default ProfileSettingModal;
