import React from 'react';

import styles from './styles';

import { ProfileProps } from 'types/myPage/myPage';

const ProfileBox: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <styles.Container>
      <styles.ProfileImage src={profile.profileImage} />
      <div>
        <styles.Nickname>{profile.nickname}</styles.Nickname>
        <styles.Introduction>{profile.introduction}</styles.Introduction>
        <styles.FollowFollowerContainer>
          <div>
            팔로잉 {profile.following} 팔로워 {profile.follower}
          </div>
        </styles.FollowFollowerContainer>
      </div>
    </styles.Container>
  );
};

export default ProfileBox;
