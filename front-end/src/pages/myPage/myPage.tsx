import React, { useEffect, useState } from 'react';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { userInfo } from '@recoil/recoil';

import {
  getMyKeywordBasedPost,
  getMyPageInfo,
  getMyPageKeyword,
  getMyPagePost,
  getMySearchBasedPost,
  getOthersKeywordBasedPost,
  getOthersPageInfo,
  getOthersPageKeyword,
  getOthersPagePost,
  getOthersSearchBasedPost,
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
  const navigate = useNavigate();
  const location = useLocation();
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
    isFollowing: false,
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
  }, [id]);

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
  }, [id]);

  const fetchPostData = async () => {
    if (id) {
      const parseId = parseInt(id);
      if (!isNaN(parseId)) {
        setIsLoading(true);

        if (id === userinfo.userId.toString()) {
          const res = await getMyPagePost(page, size);
          setPostList(res.posts);
        } else {
          const res = await getOthersPagePost(parseId, page, size);
          setPostList(res.posts);
        }
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchPostData();
  }, [id]);

  const options = [
    { label: '제목', value: 'TITLE' },
    { label: '내용', value: 'CONTENT' },
    { label: '제목+내용', value: 'BOTH' },
  ];

  // 키워드 기반 게시글 목록 가져오기
  const getPostsByKeyword = (keyword: string) => {
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        setIsLoading(true);

        if (id === userinfo.userId.toString()) {
          getMyKeywordBasedPost(keyword, page, size)
            .then((res) => setPostList(res.posts))
            .finally(() => {
              setIsLoading(false);
            });
        } else {
          getOthersKeywordBasedPost(parsedId, keyword, page, size)
            .then((res) => setPostList(res.posts))
            .finally(() => {
              setIsLoading(false);
            });
        }
      }
    }
  };

  const [selectedSearchType, setSelectedSearchType] = useState('TITLE');
  const [searchWord, setSearchWord] = useState(
    new URLSearchParams(location.search).get('search') || '',
  );

  useEffect(() => {
    if (searchWord === '') {
      fetchPostData();
    } else {
      if (id) {
        const parsedId = parseInt(id);
        if (!isNaN(parsedId)) {
          if (id === userinfo.userId.toString()) {
            getMySearchBasedPost(selectedSearchType, searchWord).then((res) =>
              setPostList(res.posts),
            );
          } else {
            getOthersSearchBasedPost(
              parsedId,
              selectedSearchType,
              searchWord,
            ).then((res) => setPostList(res.posts));
          }
        }
      }
    }
  }, [searchWord]);

  const handleSearch = (searchType: string, keyword: string) => {
    setSelectedSearchType(searchType);
    setSearchWord(keyword);

    if (keyword === '') {
      navigate(location.pathname);
    } else {
      const searchParams = new URLSearchParams();
      searchParams.set('search', keyword);
      navigate(`${location.pathname}?${searchParams.toString()}`);
    }
  };

  if (isLoading) {
    return (
      <styles.SpinnerContainer>
        <HashLoader size={120} color="#0075ff" loading={isLoading} />
      </styles.SpinnerContainer>
    );
  }

  return (
    <styles.Container>
      <styles.LeftContainer>
        <ProfileBox profileData={profileData} />
        <KeywordBox
          keywordsData={keywordsData}
          getPostsByKeyword={getPostsByKeyword}
        />
      </styles.LeftContainer>
      <styles.RightContainer>
        <SearchBar options={options} onSearch={handleSearch} />
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
