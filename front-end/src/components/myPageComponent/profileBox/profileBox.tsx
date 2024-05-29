import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ProfileProps } from 'types/myPage/myPage';

import styles from './styles';

import BasicProfileImage from '@assets/common/BasicProfile.png';
import { useRecoilValue } from 'recoil';
import { userInfo } from '@recoil/recoil';
import { doFollow, doUnfollow } from '@server/api/follow/follow';

const ProfileBox: React.FC<ProfileProps> = ({ profileData }) => {
  const userinfo = useRecoilValue(userInfo);
  const location = useLocation();

  const pathSegments = location.pathname.split('/');
  const myPageIndex = pathSegments.indexOf('mypage');
  const userId = pathSegments[myPageIndex + 1];

  const navigate = useNavigate();

  const handleNicknameClick = (userId: number) => {
    navigate(`/mypage/${userId}`);
  };

  const handleClick = (location: string) => {
    navigate(`/mypage/${userId}/${location}`);
  };

  const handleFollow = (userId: number) => {
    doFollow(userId);
  };

  const handleUnFollow = (userId: number) => {
    doUnfollow(userId);
  };

  return (
    <styles.Container>
      <styles.ProfileImage
        src={
          profileData.profileUrl ? profileData.profileUrl : BasicProfileImage
        }
      />

      <styles.NicknameFollowContainer>
        <styles.Nickname
          onClick={() => handleNicknameClick(profileData.userId)}
        >
          {profileData.nickname
            ? profileData.nickname
            : '닉네임을 설정해주세요'}
        </styles.Nickname>

        {userinfo.userId ===
        profileData.userId ? null : profileData.isFollowing ? (
          <styles.UnfollowButton
            onClick={() => handleUnFollow(profileData.userId)}
          >
            팔로잉
          </styles.UnfollowButton>
        ) : (
          <styles.FollowButton onClick={() => handleFollow(profileData.userId)}>
            팔로우
          </styles.FollowButton>
        )}
      </styles.NicknameFollowContainer>

      <styles.Introduction>
        {profileData.introduction
          ? profileData.introduction
          : '자기소개를 작성해주세요'}
      </styles.Introduction>
      <styles.FollowContainer>
        <styles.FollowData onClick={() => handleClick('following')}>
          팔로잉 {profileData.followingNum ? profileData.followingNum : 0}
        </styles.FollowData>
        <styles.FollowData onClick={() => handleClick('follower')}>
          팔로워 {profileData.followerNum ? profileData.followerNum : 0}
        </styles.FollowData>
      </styles.FollowContainer>
    </styles.Container>
  );
};

export default ProfileBox;
