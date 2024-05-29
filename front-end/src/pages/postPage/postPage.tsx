import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import {
  getKeywordBasedPost,
  getPostPopularData,
  getPostRecentData,
} from '@server/api/post/post';
import { PostDataProps } from 'types/postPage/postPage';

import SortButton from '@components/postPageComponent/sortButton/sortButton';
import PostContainer from '@components/postPageComponent/postContainer/postContainer';

import styles from './styles';
import SearchBar from '@components/commonComponent/searchBar/searchBar';

const PostPage: React.FC = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [postListData, setPostListData] = useState<PostDataProps['postData']>(
    [],
  );
  const [selectedSearchType, setSelectedSearchType] = useState('TITLE');
  const [searchWord, setSearchWord] = useState(
    new URLSearchParams(location.search).get('search') || '',
  );

  const options = [
    { label: '제목', value: 'TITLE' },
    { label: '내용', value: 'CONTENT' },
    { label: '제목+내용', value: 'BOTH' },
  ];

  const fetchData = async () => {
    if (type === 'recent') {
      const res = await getPostRecentData();
      setPostListData(res.posts);
    } else if (type === 'popular') {
      const res = await getPostPopularData();
      setPostListData(res.posts);
    }
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  useEffect(() => {
    if (searchWord === '') {
      fetchData();
    } else {
      getKeywordBasedPost(selectedSearchType, searchWord).then((res) =>
        setPostListData(res.posts),
      );
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

  return (
    <styles.Container>
      <styles.UpperContainer>
        <SortButton />
        <SearchBar options={options} onSearch={handleSearch} />
      </styles.UpperContainer>
      <PostContainer postData={postListData} />
    </styles.Container>
  );
};

export default PostPage;
