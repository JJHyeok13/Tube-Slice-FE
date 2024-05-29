import React from 'react';
import styles from './styles';

import BasicProfileImage from '@assets/common/BasicProfile.png';
import ProfileChangeImage from '@assets/settingPage/profileChangeButton.svg';

const ProfileSettingComponent: React.FC = () => {
  return (
    <styles.Container>
      <styles.InputContainer>
        <styles.Title>프로필 사진</styles.Title>
        <styles.ImageContainer>
          <styles.ProfileImage src={BasicProfileImage} />
          <styles.ImageChangeButton src={ProfileChangeImage} />
        </styles.ImageContainer>
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.Title>닉네임</styles.Title>
        <styles.TextInput type="text" />
      </styles.InputContainer>

      <styles.InputContainer>
        <styles.Title>한 줄 소개</styles.Title>
        <styles.TextInput type="text" />
      </styles.InputContainer>
    </styles.Container>
  );
};

export default ProfileSettingComponent;
