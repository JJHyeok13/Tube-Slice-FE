import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { userInfo } from '@recoil/recoil';

import { KeywordsProps, ProfileProps } from 'types/myPage/myPage';

import { FollowListProps } from 'types/followListPage/followListPage';

import {
  getMyPageInfo,
  getMyPageKeyword,
  getOthersPageInfo,
  getOthersPageKeyword,
} from '@server/api/user/myPage';
import {
  getMyFollower,
  getMyFollowing,
  getOthersFollower,
  getOthersFollowing,
} from '@server/api/user/follow';

import ProfileBox from '@components/myPageComponent/profileBox/profileBox';
import KeywordBox from '@components/myPageComponent/keywordBox/keywordBox';
import SearchBar from '@components/commonComponent/searchBar/searchBar';

import FollowList from '@components/followListPageComponent/followList/followList';

import styles from './styles';
import NavBar from '@components/followListPageComponent/navBar/navBar';

const FollowListPage: React.FC = () => {
  const userinfo = useRecoilValue(userInfo);

  const { id, follow } = useParams<{ id: string; follow: string }>();

  // 유저의 프로필 데이터 state
  const [profileData, setProfileData] = useState<ProfileProps['profileData']>({
    userId: 0,
    nickname: '',
    profileUrl: '',
    introduction: '',
    followingNum: 0,
    followerNum: 0,
  });

  // 현재 주소의 멤버 id 값과 Recoil에 저장된 본인의 id 값을 비교하여
  // 같다면 나의 정보 조회 API 호출
  // 다르다면 타인의 정보 조회 API 호출
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

  // 유저의 키워드 데이터 state
  const [keywordsData, setKeywordsData] = useState<
    KeywordsProps['keywordsData']
  >([]);

  // 현재 주소의 멤버 id 값과 Recoil에 저장된 본인의 id 값을 비교하여
  // 같다면 나의 키워드 정보 조회 API 호출
  // 다르다면 타인의 키워드 정보 조회 API 호출
  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        if (id === userinfo.userId.toString()) {
          getMyPageKeyword().then((res) => setKeywordsData(res.keywords));
        } else {
          getOthersPageKeyword(parseInt(id)).then((res) =>
            setKeywordsData(res.keywords),
          );
        }
      }
    }
  }, [keywordsData]);

  // 유저의 팔로우 데이터 state
  const [followData, setFollowData] = useState<FollowListProps['followData']>(
    [],
  );

  // 현재 주소의 멤버 id 값과 Recoil에 저장된 본인의 id 값을 비교하여
  // 같다면 나의 팔로우 정보 조회 API 호출
  // 다르다면 타인의 팔로우 정보 조회 API 호출
  useEffect(() => {
    if (id === userinfo.userId.toString()) {
      if (follow === 'follower') {
        getMyFollower().then((res) => setFollowData(res.users));
      } else if (follow === 'following') {
        getMyFollowing().then((res) => setFollowData(res.users));
      }
    } else {
      if (id) {
        const parsedId = parseInt(id);
        if (!isNaN(parsedId)) {
          if (follow === 'follower') {
            getOthersFollower(parseInt(id)).then((res) =>
              setFollowData(res.users),
            );
          } else if (follow === 'following') {
            getOthersFollowing(parseInt(id)).then((res) =>
              setFollowData(res.users),
            );
          }
        }
      }
    }
  }, [follow, followData]);

  return (
    <styles.Container>
      <styles.LeftContainer>
        <ProfileBox profileData={profileData} />
        <KeywordBox keywordsData={keywordsData} />
      </styles.LeftContainer>
      <styles.RightContainer>
        <styles.UpperContainer>
          <NavBar />
          <SearchBar />
        </styles.UpperContainer>
        <FollowList followData={followData} />
      </styles.RightContainer>
    </styles.Container>
  );
};

export default FollowListPage;
