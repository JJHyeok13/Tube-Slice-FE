import React from 'react';

import styles from './styles';

import ProfileImage from '@assets/myPage/Profile.svg';

const ProfileBox: React.FC = () => {
  return (
    <styles.Container>
      <styles.ProfileImage src={ProfileImage} />
      <div>
        <styles.Nickname>닉네임</styles.Nickname>
        <styles.Introduction>한줄 소개</styles.Introduction>
        <styles.FollowFollowerContainer>
          <div>팔로잉 7K</div>
          <div>팔로워 0</div>
        </styles.FollowFollowerContainer>
      </div>
    </styles.Container>
  );
};

export default ProfileBox;
