import React from 'react';
import { useLocation } from 'react-router-dom';

import YoutubeVideo from '@components/summarizeResultPageComponent/youtubeVideo/youtubeVideo';
import SummarizeContainer from '@components/summarizeResultPageComponent/summarizeContainer/summarizeContainer';
import SummarizeAgainButton from '@components/summarizeResultPageComponent/summarizeAgainButton/summarizeAgainButton';

import { SummarizeResultProps } from 'types/summarizeResultPage/summarizeResultPage';

import styles from './styles';

const SummarizeResultPage: React.FC = () => {
  const location = useLocation();

  const summaries = location.state as SummarizeResultProps['summaries'];

  const getYoutubeUrlFromQuery = (query: string) => {
    const params = new URLSearchParams(query);
    return params.get('youtubeUrl') || '';
  };

  const extractedYoutubeUrl = getYoutubeUrlFromQuery(location.search);

  return (
    <styles.Container>
      <styles.LeftContainer>
        <YoutubeVideo youtubeUrl={extractedYoutubeUrl} />
      </styles.LeftContainer>
      <styles.ResultContainer>
        <SummarizeContainer summaries={summaries} />
        <SummarizeAgainButton />
      </styles.ResultContainer>
    </styles.Container>
  );
};

export default SummarizeResultPage;
