import React, { useEffect } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import SubTitleContainer from '@components/convertResultPageComponent/subTitleContainer/subTitleContainer';
import YoutubeVideo from '@components/convertResultPageComponent/youtubeVideo/youtubeVideo';
import ScriptContainer from '@components/convertResultPageComponent/scriptContainer/scriptContainer';

import {
  ConvertResultProps,
  SubtitlesProps,
} from 'types/convertResultPage/convertResultPage';

import styles from './styles';

const ConvertResultPage: React.FC = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state);

  const { youtubeUrl } = useParams<{ youtubeUrl: string }>();
  const scripts = location.state.convertResult as ConvertResultProps['scripts'];
  const subtitles = location.state.subtitles as SubtitlesProps['subtitles'];

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
      <styles.LeftWrapper>
        <YoutubeVideo youtubeUrl={extractedYoutubeUrl} />
        <SubTitleContainer subtitles={subtitles} />
      </styles.LeftWrapper>

      <styles.RightWrapper>
        <ScriptContainer scripts={scripts} subtitles={subtitles} />
      </styles.RightWrapper>
    </styles.Container>
  );
};

export default ConvertResultPage;
