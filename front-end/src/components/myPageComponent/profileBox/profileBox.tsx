import React from 'react';

import styles from './styles';

import { ProfileProps } from 'types/myPage/myPage';

const ProfileBox: React.FC<ProfileProps> = ({ profileData }) => {
  return (
    <styles.Container>
      <styles.ProfileImage src={profileData.profileImage} />
      <div>
        <styles.Nickname>{profileData.nickname}</styles.Nickname>
        <styles.Introduction>{profileData.introduction}</styles.Introduction>
        <styles.FollowFollowerContainer>
          <div>
            팔로잉 {profileData.following} 팔로워 {profileData.follower}
          </div>
        </styles.FollowFollowerContainer>
      </div>
    </styles.Container>
  );
};

export default ProfileBox;
