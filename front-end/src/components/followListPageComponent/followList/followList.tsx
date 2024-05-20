import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FollowListProps } from 'types/followListPage/followListPage';

import BasicProfileImage from '@assets/common/BasicProfile.png';

import styles from './styles';
import { useRecoilValue } from 'recoil';
import { userInfo } from '@recoil/recoil';

const FollowList: React.FC<FollowListProps> = ({ followData }) => {
  const navigate = useNavigate();
  const userinfo = useRecoilValue(userInfo);

  const handleClick = (userId: number) => {
    navigate(`/mypage/${userId}`);
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
                <styles.Nickname onClick={() => handleClick(follow.userId)}>
                  {follow.nickname}
                </styles.Nickname>
                <styles.Introduction>{follow.introduction}</styles.Introduction>
              </div>
            </styles.ProfileInfo>
            {userinfo.userId !== follow.userId && follow.isFollowing ? (
              <styles.UnfollowButton>언팔로우</styles.UnfollowButton>
            ) : userinfo.userId !== follow.userId && !follow.isFollowing ? (
              <styles.FollowButton>팔로우</styles.FollowButton>
            ) : null}
          </styles.Follow>
        ))
      ) : (
        <styles.Follow>사람이 없어요</styles.Follow>
      )}
    </styles.Container>
  );
};

export default FollowList;
