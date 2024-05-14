import React from 'react';

import styles from './styles';

import { PostDataProps } from 'types/boardDetailPage/boardDetailPage';

const PostDataContainer: React.FC<PostDataProps> = ({ postData }) => {
  return (
    <styles.Container>
      <styles.Title>{postData.title}</styles.Title>
      <div>
        <styles.FirstWrapper>
          <styles.Nickname>
            <div>{postData.nickname}</div>
            <div>팔로우 버튼</div>
          </styles.Nickname>

          {postData.isMine && (
            <styles.PostOption>
              <div>수정</div>
              <div>삭제</div>
            </styles.PostOption>
          )}
        </styles.FirstWrapper>

        <styles.PostInfo>
          <styles.KeywordWrapper>
            {postData.keywords.map((keyword, index) => (
              <div key={index}>{keyword}</div>
            ))}
          </styles.KeywordWrapper>
          <div>날짜</div>
        </styles.PostInfo>
      </div>
      <div>{postData.content}</div>
    </styles.Container>
  );
};

export default PostDataContainer;
