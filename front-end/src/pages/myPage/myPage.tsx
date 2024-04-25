import React from 'react';

import styles from './styles';
import ProfileBox from '@components/myPageComponent/profileBox/profileBox';
import KeywordBox from '@components/myPageComponent/keywordBox/keywordBox';

import { dummyData } from './dummyData';
import PostList from '@components/myPageComponent/postList/postList';
import SearchBar from '@components/commonComponent/searchBar/searchBar';

const MyPage: React.FC = () => {
  return (
    <styles.Container>
      <styles.LeftContainer>
        <ProfileBox />
        <KeywordBox />
      </styles.LeftContainer>
      <styles.RightContainer>
        <SearchBar />
        <PostList postData={dummyData} />
      </styles.RightContainer>
    </styles.Container>
  );
};

export default MyPage;
