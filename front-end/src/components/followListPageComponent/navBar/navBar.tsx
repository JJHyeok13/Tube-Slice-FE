import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles';

interface NavBarProps {
  followerNum: number;
  followingNum: number;
}

const NavBar: React.FC<NavBarProps> = ({ followerNum, followingNum }) => {
  const { id, type } = useParams<{ id: string; type: string }>();
  const navigate = useNavigate();

  const isFollower = type === 'follower';
  const isFollowing = type === 'following';

  const handleClick = (userId: string, newType: string) => {
    navigate(`/mypage/${userId}/${newType}`);
  };

  return (
    <styles.Container>
      <styles.Nav
        // @ts-ignore
        onClick={() => handleClick(id, 'follower')}
        $isActive={isFollower}
      >
        팔로워 <span>{followerNum}</span>
      </styles.Nav>

      <styles.Nav
        // @ts-ignore
        onClick={() => handleClick(id, 'following')}
        $isActive={isFollowing}
      >
        팔로잉 <span>{followingNum}</span>
      </styles.Nav>
    </styles.Container>
  );
};

export default NavBar;
