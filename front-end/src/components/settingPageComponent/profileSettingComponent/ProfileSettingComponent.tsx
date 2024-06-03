import React from 'react';
import styles from './styles';

import BasicProfileImage from '@assets/common/BasicProfile.png';
import ProfileChangeImage from '@assets/settingPage/profileChangeButton.svg';

interface UserProfile {
  nickname: string;
  profileUrl: string;
  introduction: string;
}

interface ProfileSettingProps {
  userProfile: UserProfile;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdateProfile: () => void;
}

const ProfileSettingComponent: React.FC<ProfileSettingProps> = ({
  userProfile,
  handleInput,
  handleUpdateProfile,
}) => {
  return (
    <styles.Container>
      <styles.Content>
        <styles.InputContainer>
          <styles.Title>프로필 사진</styles.Title>
          <styles.ImageContainer>
            <styles.ProfileImage src={BasicProfileImage} />
            <styles.ImageChangeButton src={ProfileChangeImage} />
          </styles.ImageContainer>
        </styles.InputContainer>

        <styles.InputContainer>
          <styles.Title>닉네임</styles.Title>
          <styles.TextInput
            type="text"
            value={userProfile.nickname}
            onChange={handleInput}
          />
        </styles.InputContainer>

        <styles.InputContainer>
          <styles.Title>한 줄 소개</styles.Title>
          <styles.TextInput
            type="text"
            value={userProfile.introduction}
            onChange={handleInput}
          />
        </styles.InputContainer>
      </styles.Content>

      <styles.DeleteButton onClick={handleUpdateProfile}>
        수정하기
      </styles.DeleteButton>
    </styles.Container>
  );
};

export default ProfileSettingComponent;
