import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './styles';

const NavBar: React.FC = () => {
  const { id, type } = useParams<{ id: string; type: string }>();
  const navigate = useNavigate();

  const isFollower = type === 'follower'; // Correct comparison with `===`
  const isFollowing = type === 'following'; // Correct comparison with `===`

  const handleClick = (userId: string, newType: string) => {
    navigate(`/mypage/${userId}/${newType}`);
  };

  return (
    <styles.Container>
      <styles.Nav
        onClick={() => handleClick(id, 'follower')}
        $isActive={isFollower}
      >
        팔로워
      </styles.Nav>
      <styles.Nav
        onClick={() => handleClick(id, 'following')}
        $isActive={isFollowing}
      >
        팔로잉
      </styles.Nav>
    </styles.Container>
  );
};

export default NavBar;
