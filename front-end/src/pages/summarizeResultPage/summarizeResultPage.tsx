import React from 'react';

import YoutubeVideo from '@components/summarizeResultPageComponent/youtubeVideo/youtubeVideo';
import SummarizeContainer from '@components/summarizeResultPageComponent/summarizeContainer/summarizeContainer';
import SummarizeAgainButton from '@components/summarizeResultPageComponent/summarizeAgainButton/summarizeAgainButton';

import styles from './styles';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

const SummarizeResultPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { youtubeUrl } = useParams<{ youtubeUrl: string }>();
  const summarizeResultData = location.state?.summarizeResult || [];

  if (!youtubeUrl) {
    navigate('/');
  }

  const getYoutubeUrlFromQuery = (query: string) => {
    const params = new URLSearchParams(query);
    return params.get('youtubeUrl') || '';
  };

  const extractedYoutubeUrl = getYoutubeUrlFromQuery(location.search);

  return (
    <styles.Container>
      <YoutubeVideo youtubeUrl={extractedYoutubeUrl} />
      <styles.ResultContainer>
        <SummarizeContainer summarizeResultData={summarizeResultData} />
        <SummarizeAgainButton />
      </styles.ResultContainer>
    </styles.Container>
  );
};

export default SummarizeResultPage;
