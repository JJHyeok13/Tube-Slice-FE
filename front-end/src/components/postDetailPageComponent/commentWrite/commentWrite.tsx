import React from 'react';

import styles from './styles';

import { PostDataProps } from 'types/postDetailPage/postDetailPage';

interface CommentWriteProps extends PostDataProps {
  commentContent: string;
  setCommentContent: React.Dispatch<React.SetStateAction<string>>;
  handleWriteComment: (postId: number) => void;
}

const CommentWrite: React.FC<CommentWriteProps> = ({
  postData,
  commentContent,
  setCommentContent,
  handleWriteComment,
}) => {
  return (
    <styles.Container>
      <div>
        <styles.CommentCount>{postData.post.commentNum}</styles.CommentCount>
        개의 댓글
      </div>
      <styles.LowerWrapper>
        <styles.Textarea
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
        />
        <styles.Button onClick={() => handleWriteComment(postData.post.postId)}>
          댓글 작성
        </styles.Button>
      </styles.LowerWrapper>
    </styles.Container>
  );
};

export default CommentWrite;
