import React from 'react';

import styles from './styles';
import SubTitleContainer from '@components/convertResultPageComponent/subTitleContainer/subTitleContainer';
import { dummyData } from './dummyData';
import YoutubeVideo from '@components/convertResultPageComponent/youtubeVideo/youtubeVideo';
import ScriptContainer from '@components/convertResultPageComponent/scriptContainer/scriptContainer';

const ConvertResultPage: React.FC = () => {
  const resultData = dummyData;

  return (
    <styles.Container>
      <styles.LeftWrapper>
        <YoutubeVideo resultData={resultData} />
        <SubTitleContainer resultData={resultData} />
      </styles.LeftWrapper>
      <styles.RightWrapper>
        <ScriptContainer resultData={resultData} />
      </styles.RightWrapper>
    </styles.Container>
  );
};

export default ConvertResultPage;
