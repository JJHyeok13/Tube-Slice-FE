import React from 'react';
import styles from './styles';

import { ScriptComponentProps } from 'types/myScriptPage/myScriptPage';

const Script: React.FC<ScriptComponentProps> = ({ scriptData }) => {
  const LinktoYoutube = (url: string) => {
    window.open(`${url}`, '_blank');
  };

  const getThumbnailUrl = (url: string): string => {
    const videoId = url.split('v=')[1];
    return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
  };

  return (
    <styles.Container>
      {scriptData.map((data) => (
        <styles.MyScript key={data.id}>
          <styles.ThumbnailImage
            src={getThumbnailUrl(data.url)}
            alt="썸네일 이미지"
            onClick={() => LinktoYoutube(data.url)}
          />
          <styles.ScriptInfo>
            <styles.Title>{data.title}</styles.Title>
            <styles.Content>
              {data.content.length > 400
                ? data.content.substring(0, 400) + ' ...'
                : data.content}
            </styles.Content>
            <styles.KeywordWrapper>
              {data.keyword.map((word, index) => (
                <styles.Keyword key={index}>{word}</styles.Keyword>
              ))}
            </styles.KeywordWrapper>
          </styles.ScriptInfo>
        </styles.MyScript>
      ))}
    </styles.Container>
  );
};

export default Script;
