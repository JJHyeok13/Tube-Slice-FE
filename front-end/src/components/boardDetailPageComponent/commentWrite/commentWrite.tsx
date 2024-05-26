import React, { useState } from 'react';

import styles from './styles';

import { PostDataProps } from 'types/boardDetailPage/boardDetailPage';
import { writeComment } from '@server/api/comment/comment';
import { WriteCommentRequest } from '@server/requestType/comment/comment';

const CommentWrite: React.FC<PostDataProps> = ({ postData }) => {
  const [content, setContent] = useState<string>('');

  const handleWriteComment = async (postId: number) => {
    try {
      const requestData: WriteCommentRequest = {
        content: content,
      };
      await writeComment(postId, requestData);
      setContent('');
    } catch (error) {
      console.error('댓글 작성 에러', error);
    }
  };

  return (
    <styles.Container>
      <div>
        <styles.CommentCount>{postData.post.commentNum}</styles.CommentCount>
        개의 댓글
      </div>
      <styles.LowerWrapper>
        <styles.Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <styles.Button onClick={() => handleWriteComment(postData.post.postId)}>
          댓글 작성
        </styles.Button>
      </styles.LowerWrapper>
    </styles.Container>
  );
};

export default CommentWrite;
