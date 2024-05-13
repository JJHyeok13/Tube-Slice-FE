import React from 'react';

import { LuHeart } from 'react-icons/lu';
import { FaCopy } from 'react-icons/fa';

import styles from './styles';

const LikeBox: React.FC = () => {
  return (
    <styles.Container>
      <styles.Icon>
        <LuHeart size={30} />
      </styles.Icon>
      <div>좋아요 개수</div>
      <styles.Icon>
        <FaCopy size={30} />
      </styles.Icon>
    </styles.Container>
  );
};

export default LikeBox;
