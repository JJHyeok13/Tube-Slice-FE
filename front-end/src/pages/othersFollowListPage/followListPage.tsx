import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getOthersPageInfo, getOthersPageKeyword } from 'hooks/api/myPage';
import { getOthersFollower, getOthersFollowing } from 'hooks/api/follow';

import ProfileBox from '@components/myPageComponent/profileBox/profileBox';
import KeywordBox from '@components/myPageComponent/keywordBox/keywordBox';
import SearchBar from '@components/commonComponent/searchBar/searchBar';
import FollowList from '@components/followListPageComponent/followList/followList';

import styles from './styles';

const FollowListPage: React.FC = () => {
  const { id, follow } = useParams<{ id: string; follow: string }>();

  const [profileData, setProfileData] = useState({});
  const [keywordsData, setKeywordsData] = useState([]);

  useEffect(() => {
    if (id) {
      getOthersPageInfo(parseInt(id)).then((res) => setProfileData(res));
    }
  }, [profileData]);

  useEffect(() => {
    if (id) {
      getOthersPageKeyword(parseInt(id)).then((res) => setKeywordsData(res));
    }
  }, [keywordsData]);

  const [followData, setFollowData] = useState([]);

  useEffect(() => {
    if (id && follow) {
      if (follow === 'follower') {
        getOthersFollower(parseInt(id)).then((res) => setFollowData(res));
      } else if (follow === 'following') {
        getOthersFollowing(parseInt(id)).then((res) => setFollowData(res));
      }
    }
  }, [id, follow]);

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
