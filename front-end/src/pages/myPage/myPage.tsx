import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { userInfo } from '@recoil/recoil';

import {
  getMyPageInfo,
  getMyPageKeyword,
  getMyPagePost,
  getOthersPageInfo,
  getOthersPageKeyword,
  getOthersPagePost,
} from '@server/api/user/myPage';

import {
  ProfileProps,
  KeywordsProps,
  PostListProps,
} from 'types/myPage/myPage';

import ProfileBox from '@components/myPageComponent/profileBox/profileBox';
import KeywordBox from '@components/myPageComponent/keywordBox/keywordBox';
import SearchBar from '@components/commonComponent/searchBar/searchBar';
import PostList from '@components/myPageComponent/postList/postList';

import styles from './styles';

const MyPage: React.FC = () => {
  const userinfo = useRecoilValue(userInfo);
  const { id } = useParams<{ id: string }>();

  const [profileData, setProfileData] = useState<ProfileProps['profileData']>({
    userId: 0,
    nickname: '',
    profileUrl: '',
    introduction: '',
    followingNum: 0,
    followerNum: 0,
  });

  const [keywordsData, setKeywordsData] = useState<
    KeywordsProps['keywordsData']
  >([]);

  const [postList, setPostList] = useState<PostListProps['posts']>([
    {
      postId: 0,
      title: '',
      content: '',
      videoUrl: '',
      keywords: [
        {
          keywordId: 0,
          name: '',
        },
      ],
      likeNum: 0,
      commentNum: 0,
      createdAt: '',
    },
  ]);

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const size = 10;

  const handlePageChange = (newPage: number) => {
    setPage(newPage - 1);
  };

  // const pageNumbers = [];

  // for (let i = 1; i <= totalPages; i++) {
  //   pageNumbers.push(i);
  // }

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        if (id === userinfo.userId.toString()) {
          console.log('프로필 데이터 받았음');
          console.log(profileData);

          getMyPageInfo().then((res) => setProfileData(res));
        } else {
          getOthersPageInfo(parsedId).then((res) => setProfileData(res));
        }
      }
    }
  }, [profileData.userId]);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        if (id === userinfo.userId.toString()) {
          console.log('키워드 데이터 받았음');
          console.log(keywordsData);

          getMyPageKeyword().then((res) => setKeywordsData(res.keywords));
        } else {
          getOthersPageKeyword(parsedId).then((res) =>
            setKeywordsData(res.keywords),
          );
        }
      }
    }
  }, [keywordsData]);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        if (id === userinfo.userId.toString()) {
          getMyPagePost(page, size).then((res) => setPostList(res.posts));
        } else {
          getOthersPagePost(parsedId, page, size).then((res) =>
            setPostList(res.posts),
          );
        }
      }
    }
  }, [postList]);

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
        <PostList
          posts={postList}
          listSize={size}
          totalPage={totalPages}
          currentPage={page}
          totalElement={10}
          isFirst={true}
          isLast={false}
          // currentPage={page}
          // totalPage={totalPages}
          //handlePageChange={handlePageChange}
        />
      </styles.RightContainer>
    </styles.Container>
  );
};

export default MyPage;
