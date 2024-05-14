import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ProfileProps } from 'types/myPage/myPage';

import styles from './styles';

import BasicProfileImage from '@assets/common/BasicProfile.png';

const ProfileBox: React.FC<ProfileProps> = ({ profileData }) => {
  const navigate = useNavigate();

  const handleClick = (location: string) => {
    navigate(`/mypage/${location}`);
  };

  return (
    <styles.Container>
      <styles.ProfileImage
        src={
          profileData.profileUrl ? profileData.profileUrl : BasicProfileImage
        }
      />
      <div>
        <styles.Nickname>
          {profileData.nickname
            ? profileData.nickname
            : '닉네임을 설정해주세요'}
        </styles.Nickname>
        <styles.Introduction>
          {profileData.introduction
            ? profileData.introduction
            : '자기소개를 작성해주세요'}
        </styles.Introduction>
        <styles.FollowFollowerContainer>
          <div>
            <div onClick={() => handleClick('following')}>
              팔로잉 {profileData.followingNum ? profileData.followingNum : 0}
            </div>
            <div onClick={() => handleClick('follower')}>
              팔로워 {profileData.followerNum ? profileData.followerNum : 0}
            </div>
          </div>
        </styles.FollowFollowerContainer>
      </div>
    </styles.Container>
  );
};

export default ProfileBox;
