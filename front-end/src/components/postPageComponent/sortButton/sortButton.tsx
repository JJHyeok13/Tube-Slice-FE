import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AiFillClockCircle } from 'react-icons/ai';
import { LuHeart } from 'react-icons/lu';

import styles from './styles';

const SortButton: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isClockActive = location.pathname === '/post/recent';
  const isHeartActive = location.pathname === '/post/popular';

  const handleClockClick = () => {
    navigate('/post/recent');
  };

  const handleHeartClick = () => {
    navigate('/post/popular');
  };

  return (
    <styles.Container>
      <styles.Element $isActive={isClockActive} onClick={handleClockClick}>
        <AiFillClockCircle
          fill={isClockActive ? '#0075FF' : '#777777'}
          size={24}
        />
        <styles.Text>최신순</styles.Text>
      </styles.Element>

      <styles.Element $isActive={isHeartActive} onClick={handleHeartClick}>
        <LuHeart color={isHeartActive ? '#0075FF' : '#777777'} size={24} />
        <styles.Text>좋아요순</styles.Text>
      </styles.Element>
    </styles.Container>
  );
};

export default SortButton;
