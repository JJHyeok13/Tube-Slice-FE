import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import SubTitleContainer from '@components/scriptDetailPageComponent/subTitleContainer/subTitleContainer';
import YoutubeVideo from '@components/scriptDetailPageComponent/youtubeVideo/youtubeVideo';
import ScriptContainer from '@components/scriptDetailPageComponent/scriptContainer/scriptContainer';

import styles from './styles';
import { deleteScript, getScriptData } from '@server/api/userScript/userScript';
import { ScriptDetailDataProps } from 'types/scriptDetailPage/scriptDetailPage';

import { HashLoader } from 'react-spinners';

const ScriptDetailPage: React.FC = () => {
  const navigate = useNavigate();
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
            textId: 0,
            timeline: 0,
            text: '',
            isHighlighted: false,
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
            // @ts-ignore
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

  const handleMenuButton = () => {
    navigate(`/myscript`);
  };

  const handleDelete = (userScriptId: number) => {
    deleteScript(userScriptId);
    navigate(`/myscript`);
  };

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
        {/* @ts-ignore */}
        <YoutubeVideo youtubeUrl={scriptDetailData.youtubeUrl} />
        {/* @ts-ignore */}
        <SubTitleContainer subtitles={scriptDetailData.subtitles} />
      </styles.LeftWrapper>

      <styles.RightWrapper>
        <styles.MenuWrapper>
          <styles.BackToMenu onClick={handleMenuButton}>목록</styles.BackToMenu>
          <styles.ButtonContainer>
            {/* <styles.Button>강조하기</styles.Button>
            <styles.Button>수정하기</styles.Button> */}
            <styles.Button
              // @ts-ignore
              onClick={() => handleDelete(scriptDetailData.userScriptId)}
            >
              삭제하기
            </styles.Button>
          </styles.ButtonContainer>
        </styles.MenuWrapper>
        <ScriptContainer
          // @ts-ignore
          scripts={scriptDetailData.scripts}
          // @ts-ignore
          subtitles={scriptDetailData.subtitles}
        />
      </styles.RightWrapper>
    </styles.Container>
  );
};

export default ScriptDetailPage;
