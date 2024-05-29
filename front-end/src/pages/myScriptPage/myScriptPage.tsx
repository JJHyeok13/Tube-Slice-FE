import React, { useState } from 'react';

import styles from './styles';
import KeywordDropdown from '@components/myScriptPageComponent/keywordDropdown/keywordDropdown';
import SearchBar from '@components/commonComponent/searchBar/searchBar';
import { dummyData, keywords } from './dummyData';
import Script from '@components/myScriptPageComponent/script/Script';
import { useLocation, useNavigate } from 'react-router-dom';

const MyScriptPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const keywordData = keywords;
  const scriptData = dummyData;

  const options = [
    { label: '제목', value: 'TITLE' },
    { label: '내용', value: 'CONTENT' },
    { label: '제목+내용', value: 'TITLECONTENT' },
  ];

  const [selectedSearchType, setSelectedSearchType] = useState('TITLE');
  const [searchWord, setSearchWord] = useState(
    new URLSearchParams(location.search).get('search') || '',
  );

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
      <styles.UpperWrapper>
        <KeywordDropdown keywordData={keywordData} />
        <SearchBar options={options} onSearch={handleSearch} />
      </styles.UpperWrapper>
      <Script scriptData={scriptData} />
    </styles.Container>
  );
};

export default MyScriptPage;
