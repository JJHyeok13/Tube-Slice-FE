import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import {
  getOthersPageInfo,
  getOthersPageKeyword,
  getOthersPagePost,
} from 'hooks/api/myPage';

import ProfileBox from '@components/myPageComponent/profileBox/profileBox';
import KeywordBox from '@components/myPageComponent/keywordBox/keywordBox';
import SearchBar from '@components/commonComponent/searchBar/searchBar';
import PostList from '@components/myPageComponent/postList/postList';

import styles from './styles';

const MyPage: React.FC = () => {
  const location = useLocation();

  const [profileData, setProfileData] = useState({});
  const [keywordsData, setKeywordsData] = useState([]);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const userId = location.pathname.split('/')[2];
    getOthersPageInfo(userId).then((res) => setProfileData(res));
  }, [profileData]);

  useEffect(() => {
    const userId = location.pathname.split('/')[2];
    getOthersPageKeyword(userId).then((res) => setKeywordsData(res));
  }, [keywordsData]);

  useEffect(() => {
    const userId = location.pathname.split('/')[2];
    getOthersPagePost(userId).then((res) => setPostData(res));
  }, [postData]);

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
