import React from 'react';
import styles from './styles';

import { PostListProps } from 'types/myPage/myPage';

import { LuHeart } from 'react-icons/lu';
import { IoChatbubbleEllipsesOutline } from 'react-icons/io5';
import Pagination from '@components/commonComponent/pagination/pagination';

const PostList: React.FC<PostListProps> = ({
  postList,
  page,
  pageNumbers,
  handlePageChange,
}) => {
  const getThumbnailUrl = (url: string): string => {
    let videoId = '';

    // 'https://youtu.be/'로 시작하는 경우
    if (url.includes('https://youtu.be/')) {
      const startIndex =
        url.indexOf('https://youtu.be/') + 'https://youtu.be/'.length;
      videoId = url.slice(startIndex, startIndex + 11);
    }
    // 'https://www.youtube.com/watch?v='로 시작하는 경우
    else if (url.includes('https://www.youtube.com/watch?v=')) {
      const startIndex =
        url.indexOf('https://www.youtube.com/watch?v=') +
        'https://www.youtube.com/watch?v='.length;
      videoId = url.slice(startIndex, startIndex + 11);
    }

    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  };

  const handleYoutubeLink = (url: string) => {
    window.open(`${url}`, '_blank');
  };

  return (
    <>
      <styles.Container>
        {postList.postData && postList.postData.length > 0 ? (
          postList.postData.map((post) => (
            <styles.Mypost key={post.postId}>
              <styles.PostInfo>
                <styles.Title>{post.title}</styles.Title>
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
      <Pagination
        page={page}
        pageNumbers={pageNumbers}
        handlePageChange={handlePageChange}
      />
    </>
  );
};

export default PostList;
