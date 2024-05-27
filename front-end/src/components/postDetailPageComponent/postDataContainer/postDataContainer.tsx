import React from 'react';

import { useRecoilValue } from 'recoil';
import { userInfo } from '@recoil/recoil';

import styles from './styles';

import { PostDataProps } from 'types/postDetailPage/postDetailPage';
import { doFollow, doUnfollow } from '@server/api/follow/follow';
import { useNavigate } from 'react-router-dom';

const PostDataContainer: React.FC<PostDataProps> = ({ postData }) => {
  const userinfo = useRecoilValue(userInfo);

  const navigate = useNavigate();

  const handleProfileClick = (userId: number) => {
    navigate(`/mypage/${userId}`);
  };

  const handleFollow = (userId: number) => {
    doFollow(userId);
  };

  const handleUnFollow = (userId: number) => {
    doUnfollow(userId);
  };

  return (
    <styles.Container>
      <styles.Title>{postData.post.title}</styles.Title>
      <styles.PostInfo>
        <styles.FirstWrapper>
          <styles.WriterInfo>
            <styles.Nickname
              onClick={() => handleProfileClick(postData.post.writer.userId)}
            >
              {postData.post.writer.nickname}
            </styles.Nickname>
            {postData.post.writer.userId === userinfo.userId ? null : postData
                .post.writer.isFollowing ? (
              <styles.UnfollowButton
                onClick={() => handleUnFollow(postData.post.writer.userId)}
              >
                팔로잉
              </styles.UnfollowButton>
            ) : (
              <styles.FollowButton
                onClick={() => handleFollow(postData.post.writer.userId)}
              >
                팔로우
              </styles.FollowButton>
            )}
          </styles.WriterInfo>

          {postData.isMine && (
            <styles.OptionContainer>
              <styles.Option>수정</styles.Option>
              <styles.Option>삭제</styles.Option>
            </styles.OptionContainer>
          )}
        </styles.FirstWrapper>

        <styles.SecondWrapper>
          <styles.KeywordWrapper>
            {postData.post.keywords.map((keyword) => (
              <styles.Keyword key={keyword.keywordId}>
                {keyword.name}
              </styles.Keyword>
            ))}
          </styles.KeywordWrapper>
          <div>{postData.post.createdAt}</div>
        </styles.SecondWrapper>
      </styles.PostInfo>
      <styles.Content>{postData.post.content}</styles.Content>
    </styles.Container>
  );
};

export default PostDataContainer;
