import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SubTitleContainer from '@components/scriptDetailPageComponent/subTitleContainer/subTitleContainer';
import YoutubeVideo from '@components/scriptDetailPageComponent/youtubeVideo/youtubeVideo';
import ScriptContainer from '@components/scriptDetailPageComponent/scriptContainer/scriptContainer';

import styles from './styles';
import { getScriptData } from '@server/api/userScript/userScript';
import { ScriptDetailDataProps } from 'types/scriptDetailPage/scriptDetailPage';

import { HashLoader } from 'react-spinners';

const ScriptDetailPage: React.FC = () => {
  const { id } = useParams<string>();

  const [scriptDetailData, setScriptDetailData] =
    useState<ScriptDetailDataProps>({
      result: {
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
    });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const parsedId = parseInt(id);
      if (!isNaN(parsedId)) {
        setIsLoading(true);
        getScriptData(parsedId)
          .then((res) => {
            setScriptDetailData(res);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }
  }, [id]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (isLoading) {
    return (
      <styles.SpinnerContainer>
        <HashLoader size={120} color="#0075ff" loading={isLoading} />
      </styles.SpinnerContainer>
    );
  }

  return (
    <styles.Container>
      <styles.LeftWrapper>
        <YoutubeVideo youtubeUrl={scriptDetailData.youtubeUrl} />
        <SubTitleContainer subtitles={scriptDetailData.subtitles} />
      </styles.LeftWrapper>

      <styles.RightWrapper>
        <ScriptContainer
          scripts={scriptDetailData.scripts}
          subtitles={scriptDetailData.subtitles}
        />
      </styles.RightWrapper>
    </styles.Container>
  );
};

export default ScriptDetailPage;
