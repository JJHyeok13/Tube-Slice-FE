import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  getMyPageInfo,
  getMyPageKeyword,
  getOthersPageInfo,
  getOthersPageKeyword,
} from '@server/api/user/mypage/myPage';
import {
  getMyFollower,
  getMyFollowing,
  getOthersFollower,
  getOthersFollowing,
} from '@server/api/user/mypage/follow';

import ProfileBox from '@components/myPageComponent/profileBox/profileBox';
import KeywordBox from '@components/myPageComponent/keywordBox/keywordBox';
import SearchBar from '@components/commonComponent/searchBar/searchBar';
import FollowList from '@components/followListPageComponent/followList/followList';

import styles from './styles';
import { useRecoilValue } from 'recoil';
import { userInfo } from '@recoil/recoil';
import { ProfileProps } from 'types/myPage/myPage';

const FollowListPage: React.FC = () => {
  const userinfo = useRecoilValue(userInfo);

  const { id, follow } = useParams<{ id: string; follow: string }>();

  const [profileData, setProfileData] = useState<ProfileProps['profileData']>({
    userId: 0,
    nickname: '',
    profileUrl: '',
    introduction: '',
    followingNum: 0,
    followerNum: 0,
  });

  const [keywordsData, setKeywordsData] = useState([]);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        if (id === userinfo.userId.toString()) {
          getMyPageInfo().then((res) => setProfileData(res));
        } else {
          getOthersPageInfo(parseInt(id)).then((res) => setProfileData(res));
        }
      }
    }
  }, [profileData]);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        if (id === userinfo.userId.toString()) {
          getMyPageKeyword().then((res) => setKeywordsData(res));
        } else {
          getOthersPageKeyword(parseInt(id)).then((res) =>
            setKeywordsData(res),
          );
        }
      }
    }
  }, [keywordsData]);

  const [followData, setFollowData] = useState([]);

  useEffect(() => {
    if (id === userinfo.userId.toString()) {
      if (follow === 'follower') {
        getMyFollower().then((res) => setFollowData(res));
      } else if (follow === 'following') {
        getMyFollowing().then((res) => setFollowData(res));
      }
    } else {
      if (id) {
        const parsedId = parseInt(id);
        if (!isNaN(parsedId)) {
          if (follow === 'follower') {
            getOthersFollower(parseInt(id)).then((res) => setFollowData(res));
          } else if (follow === 'following') {
            getOthersFollowing(parseInt(id)).then((res) => setFollowData(res));
          }
        }
      }
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
