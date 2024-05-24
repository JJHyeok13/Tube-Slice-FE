import React from 'react';
import styles from './styles';

import { PostListProps } from 'types/myPage/myPage';

import { LuHeart } from 'react-icons/lu';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
// import Pagination from '@components/commonComponent/pagination/pagination';

const PostList: React.FC<PostListProps> = ({
  posts,
  listSize,
  totalPage,
  currentPage,
  totalElement,
  isFirst,
  isLast,
}) => {
  const navigate = useNavigate();

  const handleClick = (postId: number) => {
    navigate(`/board/content/${postId}`);
  };

  const getThumbnailUrl = (videoUrl: string): string => {
    let videoId = '';

    // 'https://youtu.be/'로 시작하는 경우
    if (videoUrl.includes('https://youtu.be/')) {
      const startIndex =
        videoUrl.indexOf('https://youtu.be/') + 'https://youtu.be/'.length;
      videoId = videoUrl.slice(startIndex, startIndex + 11);
    }
    // 'https://www.youtube.com/watch?v='로 시작하는 경우
    else if (videoUrl.includes('https://www.youtube.com/watch?v=')) {
      const startIndex =
        videoUrl.indexOf('https://www.youtube.com/watch?v=') +
        'https://www.youtube.com/watch?v='.length;
      videoId = videoUrl.slice(startIndex, startIndex + 11);
    }

    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  };

  const handleYoutubeLink = (url: string) => {
    window.open(`${url}`, '_blank');
  };

  return (
    <>
      <styles.Container>
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <styles.Mypost key={post.postId}>
              <styles.PostInfo>
                <styles.Title onClick={() => handleClick(post.postId)}>
                  {post.title}
                </styles.Title>
                <styles.Content>{post.content}</styles.Content>
                <styles.KeywordWrapper>
                  {post.keywords.map((keyword) => (
                    <styles.Keyword key={keyword.keywordId}>
                      {keyword.name}
                    </styles.Keyword>
                  ))}
                </styles.KeywordWrapper>
                <styles.DateCommentLike>
                  <styles.LeftInfo>
                    <LuHeart /> &nbsp; {post.likeNum} &nbsp; &nbsp;
                    <IoChatbubbleEllipsesOutline /> &nbsp; {post.commentNum}
                  </styles.LeftInfo>

                  <styles.DCLContainer>{post.createdAt}</styles.DCLContainer>
                </styles.DateCommentLike>
              </styles.PostInfo>
              <styles.ThumbnailImage
                src={getThumbnailUrl(post.videoUrl)}
                onClick={() => handleYoutubeLink(post.videoUrl)}
              />
            </styles.Mypost>
          ))
        ) : (
          <styles.Mypost>작성한 게시글이 없습니다.</styles.Mypost>
        )}
      </styles.Container>
      {/* <Pagination
        page={page}
        pageNumbers={pageNumbers}
        handlePageChange={handlePageChange}
      /> */}
    </>
  );
};

export default PostList;
