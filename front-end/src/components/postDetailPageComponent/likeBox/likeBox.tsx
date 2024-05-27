import React from 'react';

import { GoHeartFill } from 'react-icons/go';
import { GoHeart } from 'react-icons/go';

import { FaCopy } from 'react-icons/fa';

import styles from './styles';
import { PostDataProps } from 'types/postDetailPage/postDetailPage';
import { useLocation } from 'react-router-dom';
import { handleCopyClipBoard } from '@utils/copyLink';

interface LikeBoxProps extends PostDataProps {
  handleLike: (numberId: number) => void;
  handleUnLike: (numberId: number) => void;
}

const LikeBox: React.FC<LikeBoxProps> = ({
  postData,
  handleLike,
  handleUnLike,
}) => {
  const baseUrl = 'http://localhost:5173';
  const location = useLocation();

  return (
    <styles.Container>
      <styles.Icon>
        {postData.isLike ? (
          <GoHeartFill
            size={24}
            fill="#0075ff"
            onClick={() => handleUnLike(postData.post.postId)}
          />
        ) : (
          <GoHeart
            size={24}
            fill="#0075ff"
            onClick={() => handleLike(postData.post.postId)}
          />
        )}
      </styles.Icon>
      <div>{postData.post.likeNum}</div>
      <styles.Icon
        onClick={() => handleCopyClipBoard(`${baseUrl}${location.pathname}`)}
      >
        <FaCopy size={24} fill="#0075ff" />
      </styles.Icon>
    </styles.Container>
  );
};

export default LikeBox;
