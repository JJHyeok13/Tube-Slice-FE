import React from 'react';

import styles from './styles';
import KeywordDropdown from '@components/myScriptPageComponent/keywordDropdown/keywordDropdown';
import SearchBarComponent from '@components/commonComponent/searchBar/searchBar';
import { dummyData, keywords } from './dummyData';
import Script from '@components/myScriptPageComponent/Script/Script';

const MyScriptPage: React.FC = () => {
  const myScriptData = dummyData;
  const myKeywordData = keywords;

  return (
    <styles.Container>
      <styles.UpperWrapper>
        <KeywordDropdown keywordData={myKeywordData} />
        <SearchBarComponent />
      </styles.UpperWrapper>
      <Script scriptData={myScriptData} />
    </styles.Container>
  );
};

export default MyScriptPage;
