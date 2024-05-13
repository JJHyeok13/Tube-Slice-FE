import React from 'react';

import styles from './styles';

import { PostDataProps } from 'types/boardDetailPage/boardDetailPage';

const CommentWrite: React.FC<PostDataProps> = ({ postData }) => {
  return (
    <styles.Container>
      <div>
        <styles.CommentCount>{postData.commentNum}</styles.CommentCount>개의
        댓글
      </div>
      <styles.LowerWrapper>
        <styles.Textarea />
        <styles.Button>댓글 작성</styles.Button>
      </styles.LowerWrapper>
    </styles.Container>
  );
};

export default CommentWrite;
