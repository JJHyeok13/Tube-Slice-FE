import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import SelectedClockIcon from '@assets/boardPage/SelectedClockIcon.svg';
import SelectedHeartIcon from '@assets/boardPage/SelectedHeartIcon.svg';

import UnselectedClockIcon from '@assets/boardPage/UnselectedClockIcon.svg';
import UnselectedHeartIcon from '@assets/boardPage/UnselectedHeartIcon.svg';

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
      <styles.Element isActive={isClockActive} onClick={handleClockClick}>
        {isClockActive ? (
          <styles.Icon src={SelectedClockIcon} alt="Clock Icon" />
        ) : (
          <styles.Icon src={UnselectedClockIcon} alt="Clock Icon" />
        )}
        <styles.Text>최신순</styles.Text>
      </styles.Element>

      <styles.Element isActive={isHeartActive} onClick={handleHeartClick}>
        {isHeartActive ? (
          <styles.Icon src={SelectedHeartIcon} alt="Heart Icon" />
        ) : (
          <styles.Icon src={UnselectedHeartIcon} alt="Heart Icon" />
        )}
        <styles.Text>좋아요순</styles.Text>
      </styles.Element>
    </styles.Container>
  );
};

export default SortButton;
