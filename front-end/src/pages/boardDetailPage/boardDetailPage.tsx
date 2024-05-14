import React from 'react';

import LikeBox from '@components/boardDetailPageComponent/likeBox/likeBox';
import PostDataContainer from '@components/boardDetailPageComponent/postDataContainer/postDataContainer';
import CommentWrite from '@components/boardDetailPageComponent/commentWrite/commentWrite';
import CommentData from '@components/boardDetailPageComponent/commentDataContainer/commentDataContainer';

import styles from './styles';

import { postData, commentData } from './dummyData';

const BoardDetailPage: React.FC = () => {
  return (
    <styles.Container>
      <styles.LeftComponent>
        <LikeBox />
      </styles.LeftComponent>
      <styles.CenterComponent>
        <PostDataContainer postData={postData} />
        <CommentWrite postData={postData} />
        <CommentData commentData={commentData} />
      </styles.CenterComponent>
      <styles.RightComponent></styles.RightComponent>
    </styles.Container>
  );
};

export default BoardDetailPage;
