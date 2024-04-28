import React from 'react';

import styles from './styles';
import KeywordDropdown from '@components/myScriptPageComponent/keywordDropdown/keywordDropdown';
import SearchBarComponent from '@components/commonComponent/searchBar/searchBar';
import { dummyData, keywords } from './dummyData';
import Script from '@components/myScriptPageComponent/Script/Script';

const MyScriptPage: React.FC = () => {
  const keywordData = keywords;
  const scriptData = dummyData;

  return (
    <styles.Container>
      <styles.UpperWrapper>
        <KeywordDropdown keywordData={keywordData} />
        <SearchBarComponent />
      </styles.UpperWrapper>
      <Script scriptData={scriptData} />
    </styles.Container>
  );
};

export default MyScriptPage;
