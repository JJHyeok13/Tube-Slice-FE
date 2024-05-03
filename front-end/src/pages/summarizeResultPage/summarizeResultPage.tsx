import React from 'react';

import YoutubeVideo from '@components/commonComponent/youtubeVideo/youtubeVideo';
import SummarizeContainer from '@components/summarizeResultPageComponent/summarizeContainer/summarizeContainer';
import SummarizeAgainButton from '@components/summarizeResultPageComponent/summarizeAgainButton/summarizeAgainButton';

import styles from './styles';

import { dummyData } from './dummyData';

const SummarizeResultPage: React.FC = () => {
  const resultData = dummyData;
  return (
    <styles.Container>
      <YoutubeVideo resultData={resultData} />
      <SummarizeContainer resultData={resultData} />
      <SummarizeAgainButton />
    </styles.Container>
  );
};

export default SummarizeResultPage;
