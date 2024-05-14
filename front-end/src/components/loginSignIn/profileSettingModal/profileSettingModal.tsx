import React from 'react';

import { useRecoilValue } from 'recoil';
import { profileSettingModalState } from 'recoil/recoil';

import styles from './styles';

import ExitButton from '@assets/loginModal/ExitButton.svg';
import BasicProfileImage from '@assets/loginModal/BasicProfileImage.svg';

const ProfileSettingModal: React.FC = () => {
  const isProfileSettingOpen = useRecoilValue(profileSettingModalState);

  return (
    isProfileSettingOpen && (
      <styles.Modal>
        <styles.ExitButton src={ExitButton} alt="닫기" />

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
          <styles.YesButton>완료</styles.YesButton>
          <styles.NoButton>취소</styles.NoButton>
        </styles.ButtonWrapper>
      </styles.Modal>
    )
  );
};

export default ProfileSettingModal;
