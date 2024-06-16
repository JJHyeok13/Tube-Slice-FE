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
  const Texts = [];

  for (let i = 0; i < subtitles.length; i++) {
    const subtitle = subtitles[i];

    const startTimeline = subtitle.timeline;
    const endTimeline =
      i + 1 < subtitles.length ? subtitles[i + 1].timeline : Infinity;

    let mergedText = [];

    for (let j = 0; j < scripts.length; j++) {
      const script = scripts[j];
      if (script.timeline >= startTimeline && script.timeline < endTimeline) {
        mergedText.push(
          <span
            // @ts-ignore
            key={script.textId}
            style={{
              // @ts-ignore
              color: script.isHighlighted ? '#0075ff' : 'black',
              // @ts-ignore
              fontWeight: script.isHighlighted ? '600' : '500',
            }}
          >
            {script.text}{' '}
          </span>,
        );
      }
    }
    Texts.push(mergedText);
  }

  return (
    <styles.Container>
      {Texts.map((script, index) => (
        <div key={index}>
          <styles.SubtitleWrapper>
            <img src={PlayingIcon} alt="Playing Icon" /> &nbsp;{' '}
            <styles.SubtitleText>
              {subtitles[index].sub.endsWith(',')
                ? subtitles[index].sub.slice(0, -1)
                : subtitles[index].sub}
            </styles.SubtitleText>
          </styles.SubtitleWrapper>
          <styles.ScriptWrapper>{script}</styles.ScriptWrapper>
        </div>
      ))}
    </styles.Container>
  );
};

export default ScriptContainer;
