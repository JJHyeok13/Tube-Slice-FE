import React from 'react';

import { PostDataProps } from 'types/boardPage/boardPage';

import styles from './styles';

const PostContainer: React.FC<PostDataProps> = ({ postData }) => {
  return (
    <styles.Container>
      {postData.map((post) => (
        <styles.Post key={post.id}>
          <img src={post.image} />
          <styles.Text>
            <styles.Title>{post.title}</styles.Title>
            <styles.Content>{post.content}</styles.Content>
            <div>
              {post.createdAt} {post.commentCount}
            </div>
            <styles.Writer>
              By. {post.writer} <styles.ProfileImage src={post.profileImage} />
            </styles.Writer>
          </styles.Text>
        </styles.Post>
      ))}
    </styles.Container>
  );
};

export default PostContainer;
