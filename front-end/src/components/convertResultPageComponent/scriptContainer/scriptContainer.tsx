import React from 'react';

import styles from './styles';

import PlayingIcon from '@assets/convertResultPage/PlayingIcon.svg';

import { ConvertResultProps } from 'types/convertResultPage/convertResultPage';

interface ScriptContainerProps extends ConvertResultProps {
  subtitles: {
    timeline: number;
    sub: string;
  }[];
}

const ScriptContainer: React.FC<ScriptContainerProps> = ({
  scripts,
  subtitles,
}) => {
  const scriptsData = scripts.scripts;
  const subtitleData = subtitles.subtitles;

  const Texts = [];

  for (let i = 0; i < subtitleData.length; i++) {
    const subtitle = subtitleData[i];

    const startTimeline = subtitle.timeline;
    const endTimeline =
      i + 1 < subtitleData.length ? subtitleData[i + 1].timeline : Infinity;

    let mergedText = '';

    for (let j = 0; j < scriptsData.length; j++) {
      const script = scriptsData[j];
      if (script.timeline >= startTimeline && script.timeline < endTimeline) {
        mergedText += script.text + ' ';
      }
    }
    Texts.push(mergedText.trim());
  }

  return (
    <styles.Container>
      {Texts.map((script, index) => (
        <div key={index}>
          <styles.SubtitleWrapper>
            <img src={PlayingIcon} /> &nbsp;{' '}
            <div>{subtitleData[index].sub}</div>
          </styles.SubtitleWrapper>
          <styles.ScriptWrapper>{script}</styles.ScriptWrapper>
        </div>
      ))}
    </styles.Container>
  );
};

export default ScriptContainer;
