import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { HashLoader } from 'react-spinners';

import LikeBox from '@components/boardDetailPageComponent/likeBox/likeBox';
import PostDataContainer from '@components/boardDetailPageComponent/postDataContainer/postDataContainer';
import CommentWrite from '@components/boardDetailPageComponent/commentWrite/commentWrite';
import CommentData from '@components/boardDetailPageComponent/commentDataContainer/commentDataContainer';

import styles from './styles';

import { getPostCommentData, getPostDetailData } from '@server/api/post/post';
import {
  CommentDataProps,
  PostDataProps,
} from 'types/boardDetailPage/boardDetailPage';
import YoutubeVideo from '@components/commonComponent/youtubeVideo/youtubeVideo';

const BoardDetailPage: React.FC = () => {
  const { id } = useParams();

  const [postDetailData, setPostDetailData] =
    useState<PostDataProps['postData']>();
  const [postCommentData, setPostCommentData] = useState<
    CommentDataProps['comments']
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        setIsLoading(true);

        getPostDetailData(parsedId)
          .then((res) => {
            setPostDetailData(res);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        setIsLoading(true);

        getPostCommentData(parsedId)
          .then((res) => {
            setPostCommentData(res);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  }, [id]);

  if (isLoading) {
    return (
      <styles.SpinnerContainer>
        <HashLoader size={120} color="#0075ff" loading={isLoading} />
      </styles.SpinnerContainer>
    );
  }

  return (
    <styles.Container>
      <styles.LeftComponent>
        <LikeBox postData={postDetailData} />
      </styles.LeftComponent>
      <styles.CenterComponent>
        <PostDataContainer postData={postDetailData} />
        <CommentWrite postData={postDetailData} />
        <CommentData comments={postCommentData} />
      </styles.CenterComponent>
      <styles.RightComponent></styles.RightComponent>
    </styles.Container>
  );
};

export default BoardDetailPage;
