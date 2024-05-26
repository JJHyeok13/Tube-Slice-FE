import React from 'react';

import { useRecoilValue } from 'recoil';
import { userInfo } from '@recoil/recoil';

import styles from './styles';

import { PostDataProps } from 'types/boardDetailPage/boardDetailPage';

const PostDataContainer: React.FC<PostDataProps> = ({ postData }) => {
  const userinfo = useRecoilValue(userInfo);

  return (
    <styles.Container>
      <styles.Title>{postData.post.title}</styles.Title>
      <div>
        <styles.FirstWrapper>
          <styles.Nickname>
            <div>{postData.post.writer.nickname}</div>
            {postData.post.writer.userId === userinfo.userId ? null : postData
                .post.writer.isFollowing ? (
              <styles.UnfollowButton>팔로잉</styles.UnfollowButton>
            ) : (
              <styles.FollowButton>팔로우</styles.FollowButton>
            )}
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
              <styles.Keyword key={keyword.keywordId}>
                {keyword.name}
              </styles.Keyword>
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
