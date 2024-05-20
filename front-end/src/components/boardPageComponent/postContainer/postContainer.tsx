import React from 'react';

import { PostDataProps } from 'types/boardPage/boardPage';

import { LuHeart } from 'react-icons/lu';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

import BasicProfileImage from '@assets/common/BasicProfile.png';

import styles from './styles';
import { useNavigate } from 'react-router-dom';

const PostContainer: React.FC<PostDataProps> = ({ postData }) => {
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/board/content/${id}`);
  };

  const getThumbnailUrl = (url: string): string => {
    let videoId = '';

    // 'https://youtu.be/'로 시작하는 경우
    if (url.includes('https://youtu.be/')) {
      const startIndex =
        url.indexOf('https://youtu.be/') + 'https://youtu.be/'.length;
      videoId = url.slice(startIndex, startIndex + 11);
    }
    // 'https://www.youtube.com/watch?v='로 시작하는 경우
    else if (url.includes('https://www.youtube.com/watch?v=')) {
      const startIndex =
        url.indexOf('https://www.youtube.com/watch?v=') +
        'https://www.youtube.com/watch?v='.length;
      videoId = url.slice(startIndex, startIndex + 11);
    }

    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  };

  return (
    <styles.Container>
      {postData.map((post) => (
        <styles.Post key={post.postId}>
          <styles.Writer>
            <styles.ProfileImage
              src={
                post.user.profileUrl ? post.user.profileUrl : BasicProfileImage
              }
            />{' '}
            {post.user.nickname}
          </styles.Writer>
          {post.videoUrl && (
            <img src={getThumbnailUrl(post.videoUrl)} alt={post.title} />
          )}
          <styles.Text onClick={() => handleClick(post.postId)}>
            <styles.Title>{post.title}</styles.Title>
            <styles.Content>{post.content}</styles.Content>
            <styles.PostInfo>
              <styles.LeftInfo>
                <LuHeart /> &nbsp; {post.likeNum} &nbsp; &nbsp;
                <IoChatbubbleEllipsesOutline /> &nbsp; {post.commentNum}
              </styles.LeftInfo>
              <styles.RightInfo>{post.createdAt}</styles.RightInfo>
            </styles.PostInfo>
          </styles.Text>
        </styles.Post>
      ))}
    </styles.Container>
  );
};

export default PostContainer;
