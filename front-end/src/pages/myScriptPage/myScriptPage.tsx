import React from 'react';

import styles from './styles';
import SearchBarComponent from '@components/commonComponent/searchBarComponent/searchBarComponent';
import { dummyData } from './dummyData';
import ScriptComponent from '@components/myScriptPageComponent/ScriptComponent';

const MyScriptPage: React.FC = () => {
  const myScriptData = dummyData;

  return (
    <styles.Container>
      <styles.UpperWrapper>
        <SearchBarComponent />
      </styles.UpperWrapper>
      <ScriptComponent scriptData={myScriptData} />
    </styles.Container>
  );
};

export default MyScriptPage;
