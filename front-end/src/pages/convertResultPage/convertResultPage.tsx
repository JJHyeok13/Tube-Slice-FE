import React from 'react';

import styles from './styles';
import SubTitleContainer from '@components/convertResultPageComponent/subTitleContainer/subTitleContainer';
import { dummyData } from './dummyData';
import YoutubeVideo from '@components/convertResultPageComponent/youtubeVideo/youtubeVideo';

const ConvertResultPage: React.FC = () => {
  const resultData = dummyData;

  return (
    <styles.Container>
      <styles.UpperWrapper>
        <SubTitleContainer resultData={resultData} />
        <YoutubeVideo resultData={resultData} />
      </styles.UpperWrapper>
    </styles.Container>
  );
};

export default ConvertResultPage;
