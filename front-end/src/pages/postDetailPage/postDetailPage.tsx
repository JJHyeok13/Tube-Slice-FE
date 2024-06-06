import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { HashLoader } from 'react-spinners';

import LikeBox from '@components/postDetailPageComponent/likeBox/likeBox';
import PostDataContainer from '@components/postDetailPageComponent/postDataContainer/postDataContainer';
import CommentWrite from '@components/postDetailPageComponent/commentWrite/commentWrite';
import CommentData from '@components/postDetailPageComponent/commentDataContainer/commentDataContainer';

import styles from './styles';

import {
  getPostCommentData,
  getPostDetailData,
  getTimelineData,
} from '@server/api/post/post';
import { postLike, postUnlike } from '@server/api/postLike/postLike';
import { writeComment } from '@server/api/comment/comment';

import {
  CommentDataProps,
  PostDataProps,
} from 'types/postDetailPage/postDetailPage';
import { WriteCommentRequest } from '@server/requestType/comment/comment';
import YoutubeVideo from '@components/postDetailPageComponent/youtubeVideo/youtubeVideo';
import TimelineContainer from '@components/postDetailPageComponent/timelineContainer/timelineContainer';

const PostDetailPage: React.FC = () => {
  const { id } = useParams<string>();
  const parsedId = parseInt(id);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  const getPostData = async (parsedId: number) => {
    await getPostDetailData(parsedId).then((res) => setPostDetailData(res));
  };

  useEffect(() => {
    setIsLoading(true);
    getPostData(parsedId);
    setIsLoading(false);
  }, [postDetailData]);

  const [postCommentData, setPostCommentData] = useState<
    CommentDataProps['comments']
  >([]);

  const getCommentData = async (parsedId: number) => {
    await getPostCommentData(parsedId).then((res) =>
      setPostCommentData(res.comments),
    );
  };

  useEffect(() => {
    setIsLoading(true);
    getCommentData(parsedId);
    setIsLoading(false);
  }, [postCommentData]);

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

  // 댓글 input state
  const [commentContent, setCommentContent] = useState<string>('');

  // 댓글 작성 API
  const handleWriteComment = async (postId: number) => {
    const requestData: WriteCommentRequest = {
      content: commentContent,
    };
    await writeComment(postId, requestData);
    setCommentContent('');
  };

  // 데이터 로딩중
  if (isLoading) {
    return (
      <styles.SpinnerContainer>
        <HashLoader size={120} color="#0075ff" loading={isLoading} />
      </styles.SpinnerContainer>
    );
  }

  // const [timelineData, setTimelineData] = useState();

  // const getTimeline = async (postId: number) => {
  //   await getTimelineData(postId).then((res) => setTimelineData(res));
  // };

  // useEffect(() => {
  //   getTimeline(postDetailData.post.postId);
  // }, [postDetailData]);

  return (
    <>
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
          <CommentWrite
            postData={postDetailData}
            commentContent={commentContent}
            setCommentContent={setCommentContent}
            handleWriteComment={handleWriteComment}
          />
          <CommentData comments={postCommentData} />
        </styles.CenterComponent>
        <styles.RightComponent>
          <YoutubeVideo postData={postDetailData} />
          {/* <TimelineContainer timelineData={timelineData} /> */}
        </styles.RightComponent>
      </styles.Container>
    </>
  );
};

export default PostDetailPage;
