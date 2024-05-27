import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './styles';

const NavBar: React.FC = () => {
  const { id, type } = useParams<{ id: string; type: string }>();
  const navigate = useNavigate();

  const handleClick = (userId: string, type: string) => {
    navigate(`/mypage/${userId}/${type}`);
  };

  return (
    <styles.Container>
      <div onClick={() => handleClick(id, 'follower')}>팔로워</div>
      <div onClick={() => handleClick(id, 'following')}>팔로잉</div>
    </styles.Container>
  );
};

export default NavBar;
