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
import { HashLoader } from 'react-spinners';

const MyPage: React.FC = () => {
  const userinfo = useRecoilValue(userInfo);
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
        setIsLoading(true);

        if (id === userinfo.userId.toString()) {
          getMyPageInfo()
            .then((res) => setProfileData(res))
            .finally(() => {
              setIsLoading(false);
            });
        } else {
          getOthersPageInfo(parsedId)
            .then((res) => setProfileData(res))
            .finally(() => {
              setIsLoading(false);
            });
        }
      }
    }
  }, [profileData.userId]);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        setIsLoading(true);

        if (id === userinfo.userId.toString()) {
          getMyPageKeyword()
            .then((res) => setKeywordsData(res.keywords))
            .finally(() => {
              setIsLoading(false);
            });
        } else {
          getOthersPageKeyword(parsedId)
            .then((res) => setKeywordsData(res.keywords))
            .finally(() => {
              setIsLoading(false);
            });
        }
      }
    }
  }, [keywordsData]);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        setIsLoading(true);

        if (id === userinfo.userId.toString()) {
          getMyPagePost(page, size)
            .then((res) => setPostList(res.posts))
            .finally(() => {
              setIsLoading(false);
            });
        } else {
          getOthersPagePost(parsedId, page, size)
            .then((res) => setPostList(res.posts))
            .finally(() => {
              setIsLoading(false);
            });
        }
      }
    }
  }, [postList]);

  const options = [
    { label: '제목', value: 'Title' },
    { label: '내용', value: 'Content' },
    { label: '제목+내용', value: 'TitleContent' },
  ];

  // if (isLoading) {
  //   return (
  //     <styles.SpinnerContainer>
  //       <HashLoader size={120} color="#0075ff" loading={isLoading} />
  //     </styles.SpinnerContainer>
  //   );
  // }

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
