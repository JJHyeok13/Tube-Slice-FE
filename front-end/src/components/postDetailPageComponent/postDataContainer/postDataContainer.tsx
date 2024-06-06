import React, { useState } from 'react';

import { useRecoilValue } from 'recoil';
import { userInfo } from '@recoil/recoil';

import styles from './styles';

import { PostDataProps } from 'types/postDetailPage/postDetailPage';
import { doFollow, doUnfollow } from '@server/api/follow/follow';
import { useNavigate } from 'react-router-dom';

import BasicProfile from '@assets/common/BasicProfile.png';
import DeleteModal from '../postDeleteModal/deleteModal';
import { deletePost } from '@server/api/post/post';

const PostDataContainer: React.FC<PostDataProps> = ({ postData }) => {
  const [isDeleteMode, setIsDeleteMode] = useState<boolean>(false);
  const [selectedPostId, setSelectedPostId] = useState<number>(0);

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

  const handleModalOpen = (postId: number) => {
    setSelectedPostId(postId);
    setIsDeleteMode(true);
  };

  const handleCancel = () => {
    setIsDeleteMode(false);
  };

  const handleDeletePost = (postId: number) => {
    deletePost(postId);
    setIsDeleteMode(false);
    navigate(`/mypage/${userinfo.userId}`);
  };

  return (
    <>
      <styles.Container>
        <styles.Title>{postData.post.title}</styles.Title>
        <styles.PostInfo>
          <styles.FirstWrapper>
            <styles.WriterInfo>
              <styles.ProfileImage
                src={
                  postData.post.writer.profileUrl
                    ? postData.post.writer.profileUrl
                    : BasicProfile
                }
              />
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
                <styles.Option
                  onClick={() => handleModalOpen(postData.post.postId)}
                >
                  삭제
                </styles.Option>
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

      {isDeleteMode && (
        <DeleteModal
          postId={selectedPostId}
          handleCancel={handleCancel}
          handleDeletePost={handleDeletePost}
        />
      )}
    </>
  );
};

export default PostDataContainer;
