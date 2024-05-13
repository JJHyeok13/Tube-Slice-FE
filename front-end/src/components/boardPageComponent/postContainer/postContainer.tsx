import React from 'react';

import { PostDataProps } from 'types/boardPage/boardPage';

import { LuHeart } from 'react-icons/lu';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';

import styles from './styles';

const PostContainer: React.FC<PostDataProps> = ({ postData }) => {
  return (
    <styles.Container>
      {postData.map((post) => (
        <styles.Post key={post.id}>
          <styles.Writer>
            <styles.ProfileImage src={post.profileImage} /> {post.writer}
          </styles.Writer>
          <img src={post.image} />
          <styles.Text>
            <styles.Title>{post.title}</styles.Title>
            <styles.Content>{post.content}</styles.Content>
            <styles.PostInfo>
              <styles.LeftInfo>
                <LuHeart /> &nbsp; {post.heartCount} &nbsp; &nbsp;
                <IoChatbubbleEllipsesOutline /> &nbsp; {post.commentCount}
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
