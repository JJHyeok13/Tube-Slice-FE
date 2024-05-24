import React, { useEffect, useState } from 'react';

import LikeBox from '@components/boardDetailPageComponent/likeBox/likeBox';
import PostDataContainer from '@components/boardDetailPageComponent/postDataContainer/postDataContainer';
import CommentWrite from '@components/boardDetailPageComponent/commentWrite/commentWrite';
import CommentData from '@components/boardDetailPageComponent/commentDataContainer/commentDataContainer';

import styles from './styles';

import { useParams } from 'react-router-dom';
import { getPostCommentData, getPostDetailData } from '@server/api/post/post';
import {
  CommentDataProps,
  PostDataProps,
} from 'types/boardDetailPage/boardDetailPage';

const BoardDetailPage: React.FC = () => {
  const { id } = useParams();

  const [postDetailData, setPostDetailData] =
    useState<PostDataProps['postData']>();
  const [postCommentData, setPostCommentData] = useState<
    CommentDataProps['commentData']
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        setIsLoading(true);
        getPostDetailData(parsedId).then((res) => {
          setPostDetailData(res.post);
          setIsLoading(false);
        });
        getPostCommentData(parsedId).then((res) => setPostCommentData(res));

        console.log(postDetailData);
        console.log(postCommentData);
      }
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <styles.Container>
      <styles.LeftComponent>
        <LikeBox />
      </styles.LeftComponent>
      <styles.CenterComponent>
        <PostDataContainer postData={postDetailData} />
        <CommentWrite postData={postDetailData} />
        <CommentData commentData={postCommentData} />
      </styles.CenterComponent>
      <styles.RightComponent></styles.RightComponent>
    </styles.Container>
  );
};

export default BoardDetailPage;
