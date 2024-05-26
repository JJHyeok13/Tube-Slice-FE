import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FollowListProps } from 'types/followListPage/followListPage';

import BasicProfileImage from '@assets/common/BasicProfile.png';

import styles from './styles';
import { useRecoilValue } from 'recoil';
import { userInfo } from '@recoil/recoil';
import { doFollow, doUnfollow } from '@server/api/follow/follow';

const FollowList: React.FC<FollowListProps> = ({ followData }) => {
  const navigate = useNavigate();
  const userinfo = useRecoilValue(userInfo);

  const handleProfileClick = (userId: number) => {
    navigate(`/mypage/${userId}`);
  };

  const handleFollow = (userId: number) => {
    doFollow(userId);
  };

  const handleUnFollow = (userId: number) => {
    doUnfollow(userId);
  };

  return (
    <styles.Container>
      {followData && followData.length > 0 ? (
        followData.map((follow) => (
          <styles.Follow key={follow.userId}>
            <styles.ProfileInfo>
              <styles.ProfileImage
                src={follow.profileUrl ? follow.profileUrl : BasicProfileImage}
                alt={follow.nickname}
              />
              <div>
                <styles.Nickname
                  onClick={() => handleProfileClick(follow.userId)}
                >
                  {follow.nickname}
                </styles.Nickname>
                <styles.Introduction>{follow.introduction}</styles.Introduction>
              </div>
            </styles.ProfileInfo>
            {follow.userId === userinfo.userId ? null : follow.isFollowing ? (
              <styles.UnfollowButton
                onClick={() => handleUnFollow(follow.userId)}
              >
                팔로잉
              </styles.UnfollowButton>
            ) : (
              <styles.FollowButton onClick={() => handleFollow(follow.userId)}>
                팔로우
              </styles.FollowButton>
            )}
          </styles.Follow>
        ))
      ) : (
        <styles.Follow>사람이 없어요</styles.Follow>
      )}
    </styles.Container>
  );
};

export default FollowList;
