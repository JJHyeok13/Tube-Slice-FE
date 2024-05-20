import React from 'react';

import styles from './styles';

import { PostDataProps } from 'types/boardDetailPage/boardDetailPage';

const PostDataContainer: React.FC<PostDataProps> = ({ postData }) => {
  return (
    <styles.Container>
      <styles.Title>{postData.post.title}</styles.Title>
      <div>
        <styles.FirstWrapper>
          <styles.Nickname>
            <div>{postData.post.writer.nickname}</div>
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
            {postData.post.keywords.map((keyword) => (
              <div key={keyword.keywordId}>{keyword.name}</div>
            ))}
          </styles.KeywordWrapper>
          <div>{postData.post.createdAt}</div>
        </styles.PostInfo>
      </div>
      <div>{postData.post.content}</div>
    </styles.Container>
  );
};

export default PostDataContainer;
