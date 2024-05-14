import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AiFillClockCircle } from 'react-icons/ai';
import { LuHeart } from 'react-icons/lu';

import styles from './styles';

interface SortButtonProps {
  sortFunction: (criterion: '최신순' | '좋아요순') => void;
}

const SortButton: React.FC<SortButtonProps> = ({ sortFunction }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isClockActive = location.pathname === '/board/recent';
  const isHeartActive = location.pathname === '/board/like';

  const handleClockClick = () => {
    sortFunction('최신순');
    navigate('/board/recent');
  };

  const handleHeartClick = () => {
    sortFunction('좋아요순');
    navigate('/board/like');
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
