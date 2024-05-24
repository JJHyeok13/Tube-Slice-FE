import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getPostPopularData, getPostRecentData } from '@server/api/post/post';
import { PostDataProps } from 'types/boardPage/boardPage';

import SortButton from '@components/boardPageComponent/sortButton/sortButton';
import PostContainer from '@components/boardPageComponent/postContainer/postContainer';

import styles from './styles';

const BoardPage: React.FC = () => {
  const { type } = useParams();
  const [postListData, setPostListData] = useState<PostDataProps['postData']>(
    [],
  );

  useEffect(() => {
    if (type === 'recent') {
      getPostRecentData().then((res) => setPostListData(res.posts));
    } else if (type === 'popular') {
      getPostPopularData().then((res) => setPostListData(res.posts));
    }
  }, [type]);

  return (
    <styles.Container>
      <SortButton />
      <PostContainer postData={postListData} />
    </styles.Container>
  );
};

export default BoardPage;
