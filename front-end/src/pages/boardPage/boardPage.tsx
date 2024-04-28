import React, { useState } from 'react';

import styles from './styles';

import { dummyData } from './dummyData';
import SortButton from '@components/boardPageComponent/sortButton/sortButton';
import PostContainer from '@components/boardPageComponent/postContainer/postContainer';

const BoardPage: React.FC = () => {
  const [sortingCriterion, setSortingCriterion] = useState<
    '최신순' | '좋아요순'
  >('최신순');
  const [sortedData, setSortedData] = useState(dummyData);

  const sortData = (criterion: '최신순' | '좋아요순') => {
    if (criterion === '최신순') {
      setSortedData(
        [...dummyData].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        ),
      );
    } else if (criterion === '좋아요순') {
      setSortedData([...dummyData].sort((a, b) => b.heartCount - a.heartCount));
    }
    setSortingCriterion(criterion);
  };
  return (
    <styles.Container>
      <SortButton sortFunction={sortData} />
      <PostContainer postData={sortedData} />
    </styles.Container>
  );
};

export default BoardPage;
