import React from 'react';
import styles from './styles';
import { Users } from 'types/followListPage/followListPage';
import { useNavigate } from 'react-router-dom';

const FollowList: React.FC<Users> = ({ followData }) => {
  const navigate = useNavigate();

  const handleClick = (userId: number) => {
    navigate(`/user/${userId}`);
  };

  return (
    <styles.Container>
      {followData && followData.length > 0 ? (
        followData.map((follow) => (
          <styles.Follow key={follow.userId}>
            <div>
              <img src={follow.profileUrl} alt={follow.nickname} />
              <div onClick={() => handleClick(follow.userId)}>
                {follow.nickname}
              </div>
              <div>{follow.introduction}</div>
            </div>
          </styles.Follow>
        ))
      ) : (
        <styles.Follow>사람이 없어요</styles.Follow>
      )}
    </styles.Container>
  );
};

export default FollowList;
