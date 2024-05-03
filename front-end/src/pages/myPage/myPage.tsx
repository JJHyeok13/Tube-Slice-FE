import React from 'react';

import styles from './styles';
import ProfileBox from '@components/myPageComponent/profileBox/profileBox';
import KeywordBox from '@components/myPageComponent/keywordBox/keywordBox';
import PostList from '@components/myPageComponent/postList/postList';

import { dummyData, profile, keywords } from './dummyData';
import SearchBar from '@components/commonComponent/searchBar/searchBar';

const MyPage: React.FC = () => {
  const profileData = profile;
  const keywordsData = keywords;
  const postData = dummyData;

  const options = [
    { label: '제목', value: 'Title' },
    { label: '내용', value: 'Content' },
    { label: '제목+내용', value: 'TitleContent' },
  ];

  return (
    <styles.Container>
      <styles.LeftContainer>
        <ProfileBox profileData={profileData} />
        <KeywordBox keywordsData={keywordsData} />
      </styles.LeftContainer>
      <styles.RightContainer>
        <SearchBar options={options} />
        <PostList postData={postData} />
      </styles.RightContainer>
    </styles.Container>
  );
};

export default MyPage;
