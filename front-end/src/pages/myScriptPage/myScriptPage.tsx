import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './styles';
import KeywordDropdown from '@components/myScriptPageComponent/keywordDropdown/keywordDropdown';
import SearchBar from '@components/commonComponent/searchBar/searchBar';
import { keywords } from './dummyData';
import Script from '@components/myScriptPageComponent/script/Script';
import { ScriptListProps } from 'types/myScriptPage/myScriptPage';
import { getScriptList } from '@server/api/userScript/userScript';

import { HashLoader } from 'react-spinners';

const MyScriptPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const keywordData = keywords;
  const [scriptList, setScriptList] = useState<ScriptListProps>({
    scriptList: [
      {
        userScriptId: 0,
        youtubeUrl: '',
        youtubeTitle: '',
        subtitles: [
          {
            timeline: 0,
            sub: '',
          },
        ],
        scriptId: 0,
        scripts: [
          {
            timeline: 0,
            text: '',
          },
        ],
        scriptKeywords: [
          {
            keywordId: 0,
            name: '',
          },
        ],
      },
    ],
  });

  useEffect(() => {
    setIsLoading(true);
    getScriptList()
      // @ts-ignore
      .then((res) => setScriptList(res))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleScriptClick = (userScriptId: number) => {
    navigate(`/myscript/${userScriptId}`);
  };

  const options = [
    { label: '제목', value: 'TITLE' },
    { label: '내용', value: 'CONTENT' },
    { label: '제목+내용', value: 'TITLECONTENT' },
  ];

  // @ts-ignore
  const [selectedSearchType, setSelectedSearchType] = useState('TITLE');
  // @ts-ignore
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

  if (isLoading) {
    return (
      <styles.SpinnerContainer>
        <HashLoader size={120} color="#0075ff" loading={isLoading} />
      </styles.SpinnerContainer>
    );
  }

  return (
    <styles.Container>
      <styles.UpperWrapper>
        <KeywordDropdown keywordData={keywordData} />
        <SearchBar options={options} onSearch={handleSearch} />
      </styles.UpperWrapper>
      {/* @ts-ignore */}
      <Script scriptList={scriptList} handleScriptClick={handleScriptClick} />
    </styles.Container>
  );
};

export default MyScriptPage;
