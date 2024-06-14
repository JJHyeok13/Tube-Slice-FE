import React from 'react';
import styles from './styles';

import { ScriptListProps } from 'types/myScriptPage/myScriptPage';
import { getThumbnailUrl } from '@utils/getThumbnail';

interface ScriptProps extends ScriptListProps {
  handleScriptClick: (userScriptId: number) => void;
}

const Script: React.FC<ScriptProps> = ({ scriptList, handleScriptClick }) => {
  const LinktoYoutube = (url: string) => {
    window.open(`${url}`, '_blank');
  };

  const combineScripts = (
    scripts: {
      textId: number;
      timeline: number;
      text: string;
      isHighlighted: boolean;
    }[],
  ) => {
    let combinedText = ''; // 빈 문자열로 초기화

    // scripts 배열의 각 요소에 대하여 반복
    for (let i = 0; i < scripts.length; i++) {
      const script = scripts[i]; // 현재 스크립트

      // 현재 스크립트의 text를 합친 문자열에 추가
      combinedText += script.text + ' ';
    }

    return combinedText.trim();
  };

  return (
    <styles.Container>
      {scriptList.scriptList.map((data) => (
        <styles.MyScript key={data.userScriptId}>
          <styles.ThumbnailImage
            src={getThumbnailUrl(data.youtubeUrl)}
            alt="썸네일 이미지"
            onClick={() => LinktoYoutube(data.youtubeUrl)}
          />
          <styles.ScriptInfo>
            <styles.Title onClick={() => handleScriptClick(data.userScriptId)}>
              {data.youtubeTitle.replace(/^'|\.webm'$/g, '')}
            </styles.Title>
            <styles.Content>
              {combineScripts(data.scripts).length > 320
                ? combineScripts(data.scripts).substring(0, 320) + ' ...'
                : combineScripts(data.scripts)}
            </styles.Content>
            <styles.KeywordWrapper>
              {data.scriptKeywords.map((word) => (
                <styles.Keyword key={word.keywordId}>
                  {word.name}
                </styles.Keyword>
              ))}
            </styles.KeywordWrapper>
          </styles.ScriptInfo>
        </styles.MyScript>
      ))}
    </styles.Container>
  );
};

export default Script;
