import React from 'react';

import styles from './styles';

import { CommentDataProps } from 'types/boardDetailPage/boardDetailPage';

import BasicProfile from '@assets/common/BasicProfile.png';

const CommentDataContainer: React.FC<CommentDataProps> = ({ comments }) => {
  const noCommentMessage = <div>해당 게시물의 댓글이 존재하지 않습니다.</div>;

  return (
    <styles.Container>
      {/* 댓글이 존재하는 경우 */}
      {comments.length > 0
        ? comments.map((comment) => (
            <styles.Comment key={comment.commentId}>
              <styles.UpperWrapper>
                <styles.WriterInfo>
                  <styles.ProfileImage
                    src={comment.profileUrl ? comment.profileUrl : BasicProfile}
                  />
                  <styles.NicknameTime>
                    <div>{comment.nickname}</div>
                    <div>{comment.createdAt}</div>
                  </styles.NicknameTime>
                </styles.WriterInfo>
                {comment.isMine && (
                  <styles.CommentOption>
                    <div>수정</div>
                    <div>삭제</div>
                  </styles.CommentOption>
                )}
              </styles.UpperWrapper>
              <div>{comment.content}</div>
            </styles.Comment>
          ))
        : // 댓글이 없는 경우 메시지 표시
          noCommentMessage}
    </styles.Container>
  );
};

export default CommentDataContainer;
