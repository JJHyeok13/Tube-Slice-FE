import React, { useState } from 'react';

import styles from './styles';

import { SubtitlesProps } from 'types/convertResultPage/convertResultPage';

const SubTitleContainer: React.FC<SubtitlesProps> = ({ subtitles }) => {
  const [visibleSubtitles, setVisibleSubtitles] = useState(5);

  const handleLoadMore = () => {
    // @ts-ignore
    setVisibleSubtitles(subtitles.subtitles.length);
  };

  return (
    <styles.Container>
      <h3>스크립트를 요약했어요...👀</h3>
      <styles.SubtitleList>
        {/* @ts-ignore */}
        {subtitles.subtitles.slice(0, visibleSubtitles).map((data, index) => (
          <styles.Subtitle key={data.subtitleId}>
            <div>
              <styles.SubtitleNumber>{index + 1}</styles.SubtitleNumber>{' '}
              {data.sub.endsWith(',') ? data.sub.slice(0, -1) : data.sub}
            </div>
          </styles.Subtitle>
        ))}
      </styles.SubtitleList>
      {/* @ts-ignore */}
      {visibleSubtitles < subtitles.subtitles.length && (
        <styles.SeeMoreButton onClick={handleLoadMore}>
          더보기
        </styles.SeeMoreButton>
      )}
    </styles.Container>
  );
};

export default SubTitleContainer;
