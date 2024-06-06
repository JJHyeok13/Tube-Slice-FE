import React from 'react';

import styles from './styles';

import { SubtitlesProps } from 'types/convertResultPage/convertResultPage';

const SubTitleContainer: React.FC<SubtitlesProps> = ({ subtitles }) => {
  return (
    <styles.Container>
      <h3>스크립트를 요약했어요...👀</h3>
      <styles.SubtitleList>
        {subtitles.subtitles.map((data, index) => (
          <styles.Subtitle key={data.subtitleId}>
            <div>
              <styles.SubtitleNumber>{index + 1}</styles.SubtitleNumber>{' '}
              {data.sub}
            </div>
          </styles.Subtitle>
        ))}
      </styles.SubtitleList>
    </styles.Container>
  );
};

export default SubTitleContainer;
