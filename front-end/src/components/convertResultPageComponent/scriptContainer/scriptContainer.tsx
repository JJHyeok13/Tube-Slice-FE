import React from 'react';

import styles from './styles';

import PlayingIcon from '@assets/convertResultPage/PlayingIcon.svg';

interface Subtitles {
  subtitleId: number;
  subtitle: string;
  timeline: string;
}

interface Video {
  videoId: number;
  url: string;
}

interface Scripts {
  scriptId: number;
  script: string;
  timeline: string;
}

interface ResultData {
  scripts: Scripts[];
  video: Video;
  subtitles: Subtitles[];
}

interface ResultDataProps {
  resultData: ResultData;
}

const ScriptContainer: React.FC<ResultDataProps> = ({ resultData }) => {
  return (
    <>
      {resultData.subtitles.map((subtitle, index) => {
        const script = resultData.scripts[index];
        return (
          <div key={subtitle.subtitleId}>
            <styles.SubtitleWrapper>
              <img src={PlayingIcon} />
              <h2>{subtitle.subtitle}</h2>
            </styles.SubtitleWrapper>

            <styles.ScriptWrapper>{script.script}</styles.ScriptWrapper>
          </div>
        );
      })}
    </>
  );
};

export default ScriptContainer;
