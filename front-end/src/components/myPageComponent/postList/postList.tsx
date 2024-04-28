import React from 'react';

import styles from './styles';

import CommentIcon from '@assets/myPage/CommentIcon.svg';
import LikeIcon from '@assets/myPage/LikeIcon.svg';

import { PostListProps } from 'types/myPage/myPage';

const PostList: React.FC<PostListProps> = ({ postData }) => {
  const getThumbnailUrl = (url: string): string => {
    const videoId = url.split('v=')[1];
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  };

  return (
    <styles.Container>
      {postData.map((post) => (
        <styles.Mypost key={post.id}>
          <styles.PostInfo>
            <styles.Title>{post.title}</styles.Title>
            <styles.Content>{post.content}</styles.Content>
            <styles.KeywordWrapper>
              {post.keywords.map((keyword) => (
                <styles.Keyword>{keyword}</styles.Keyword>
              ))}
            </styles.KeywordWrapper>
            <styles.DateCommentLike>
              <styles.DCLContainer>{post.createAt}</styles.DCLContainer>
              <styles.DCLContainer>
                <styles.Icon src={CommentIcon} />
                {post.commentCount}
              </styles.DCLContainer>
              <styles.DCLContainer>
                <styles.Icon src={LikeIcon} />
                {post.likeCount}
              </styles.DCLContainer>
            </styles.DateCommentLike>
          </styles.PostInfo>
          <styles.ThumbnailImage src={getThumbnailUrl(post.url)} />
        </styles.Mypost>
      ))}
    </styles.Container>
  );
};

export default PostList;
