import React, { useEffect, useState } from 'react';

import SortButton from '@components/boardPageComponent/sortButton/sortButton';
import PostContainer from '@components/boardPageComponent/postContainer/postContainer';

import styles from './styles';
import { getPostPopularData, getPostRecentData } from '@server/api/post/post';
import { useParams } from 'react-router-dom';

const BoardPage: React.FC = () => {
  const { type } = useParams();
  const [postListData, setPostListData] = useState([]);

  useEffect(() => {
    if (type === 'recent') {
      getPostRecentData().then((res) => setPostListData(res));
    } else if (type === 'popular') {
      getPostPopularData().then((res) => setPostListData(res));
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
