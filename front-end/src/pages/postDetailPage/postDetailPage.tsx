import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { HashLoader } from 'react-spinners';

import LikeBox from '@components/postDetailPageComponent/likeBox/likeBox';
import PostDataContainer from '@components/postDetailPageComponent/postDataContainer/postDataContainer';
import CommentWrite from '@components/postDetailPageComponent/commentWrite/commentWrite';
import CommentData from '@components/postDetailPageComponent/commentDataContainer/commentDataContainer';

import styles from './styles';

import { getPostCommentData, getPostDetailData } from '@server/api/post/post';

import { postLike, postUnlike } from '@server/api/postLike/postLike';

import {
  CommentDataProps,
  PostDataProps,
} from 'types/postDetailPage/postDetailPage';

const PostDetailPage: React.FC = () => {
  const { id } = useParams();

  const [postDetailData, setPostDetailData] = useState<
    PostDataProps['postData']
  >({
    isMine: false,
    isLike: false,
    post: {
      writer: {
        userId: 0,
        nickname: '',
        profileUrl: '',
        isFollowing: false,
      },
      postId: 0,
      title: '',
      content: '',
      videoUrl: '',
      keywords: [
        {
          keywordId: 0,
          name: '',
        },
      ],
      likeNum: 0,
      commentNum: 0,
      createdAt: '',
    },
  });

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
            setPostCommentData(res.comments);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  }, [id]);

  // 게시글 좋아요
  const handleLike = (postId: number) => {
    setPostDetailData((prevState) => ({
      ...prevState,
      isLike: true,
      post: {
        ...prevState.post,
        likeNum: prevState.post.likeNum + 1,
      },
    }));
    postLike(postId);
  };
  // 게시글 좋아요 취소
  const handleUnLike = (postId: number) => {
    setPostDetailData((prevState) => ({
      ...prevState,
      isLike: false,
      post: {
        ...prevState.post,
        likeNum: prevState.post.likeNum - 1,
      },
    }));
    postUnlike(postId);
  };

  // 데이터 로딩중
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
        <LikeBox
          postData={postDetailData}
          handleLike={handleLike}
          handleUnLike={handleUnLike}
        />
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

export default PostDetailPage;
