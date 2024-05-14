import React from 'react';

import styles from './styles';

import { CommentDataProps } from 'types/boardDetailPage/boardDetailPage';

import BasicProfile from '@assets/common/BasicProfile.png';

const CommentDataContainer: React.FC<CommentDataProps> = ({ commentData }) => {
  return (
    <styles.Container>
      {commentData.map((comment) => (
        <styles.Comment>
          <styles.UpperWrapper key={comment.commentId}>
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
      ))}
    </styles.Container>
  );
};

export default CommentDataContainer;
