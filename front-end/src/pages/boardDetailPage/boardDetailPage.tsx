import React from 'react';

import CommentData from '@components/boardDetailPageComponent/commentData/commentData';
import CommentWrite from '@components/boardDetailPageComponent/commentWrite/commentWrite';
import PostData from '@components/boardDetailPageComponent/postData/postData';

import styles from './styles';

import { postData, commentData } from './dummyData';
import LikeBox from '@components/boardDetailPageComponent/likeBox/likeBox';

const BoardDetailPage: React.FC = () => {
  return (
    <styles.Container>
      <styles.LeftComponent>
        <LikeBox />
      </styles.LeftComponent>
      <styles.CenterComponent>
        <PostData postData={postData} />
        <CommentWrite postData={postData} />
        <CommentData commentData={commentData} />
      </styles.CenterComponent>
      <styles.RightComponent></styles.RightComponent>
    </styles.Container>
  );
};

export default BoardDetailPage;
