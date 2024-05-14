import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getMyPageInfo, getMyPageKeyword } from 'hooks/api/myPage';
import { getMyFollower, getMyFollowing } from 'hooks/api/follow';

import ProfileBox from '@components/myPageComponent/profileBox/profileBox';
import KeywordBox from '@components/myPageComponent/keywordBox/keywordBox';
import SearchBar from '@components/commonComponent/searchBar/searchBar';
import FollowList from '@components/followListPageComponent/followList/followList';

import styles from './styles';

const FollowListPage: React.FC = () => {
  const { follow } = useParams<{ follow: string }>();

  const [profileData, setProfileData] = useState({});
  const [keywordsData, setKeywordsData] = useState([]);

  useEffect(() => {
    getMyPageInfo().then((res) => setProfileData(res));
  }, [profileData]);

  useEffect(() => {
    getMyPageKeyword().then((res) => setKeywordsData(res));
  }, [keywordsData]);

  const [followData, setFollowData] = useState([]);

  useEffect(() => {
    if (follow === 'follower') {
      getMyFollower().then((res) => setFollowData(res));
    } else if (follow === 'following') {
      getMyFollowing().then((res) => setFollowData(res));
    }
  }, [follow]);

  return (
    <styles.Container>
      <styles.LeftContainer>
        <ProfileBox profileData={profileData} />
        <KeywordBox keywordsData={keywordsData} />
      </styles.LeftContainer>
      <styles.RightContainer>
        <SearchBar />
        <FollowList followData={followData} />
      </styles.RightContainer>
    </styles.Container>
  );
};

export default FollowListPage;
