import React, { useRef } from 'react';
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
  handleUpdateProfile: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleImageChange: (file: File) => void;
}

const ProfileSettingComponent: React.FC<ProfileSettingProps> = ({
  userProfile,
  handleInput,
  handleUpdateProfile,
  handleImageChange,
}) => {
  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <styles.Container>
      <styles.Content>
        <styles.InputContainer>
          <styles.Title>프로필 사진</styles.Title>
          <styles.ImageContainer>
            <styles.ProfileImage
              src={
                userProfile.profileUrl
                  ? userProfile.profileUrl
                  : BasicProfileImage
              }
            />
            <div onClick={handleImageClick}>
              <styles.ImageChangeButton src={ProfileChangeImage} />
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={() => handleImageChange}
              />
            </div>
          </styles.ImageContainer>
        </styles.InputContainer>

        <styles.InputContainer>
          <styles.Title>닉네임</styles.Title>
          <styles.TextInput
            type="text"
            name="nickname"
            value={userProfile.nickname}
            onChange={handleInput}
          />
        </styles.InputContainer>

        <styles.InputContainer>
          <styles.Title>한 줄 소개</styles.Title>
          <styles.TextInput
            type="text"
            name="introduction"
            value={userProfile.introduction}
            onChange={handleInput}
          />
        </styles.InputContainer>
      </styles.Content>

      <styles.DeleteButton onClick={() => handleUpdateProfile}>
        수정하기
      </styles.DeleteButton>
    </styles.Container>
  );
};

export default ProfileSettingComponent;
