import React from 'react';

import styles from './styles';

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

const SubTitleContainer: React.FC<ResultDataProps> = ({ resultData }) => {
  return (
    <styles.Container>
      <h3>스크립트를 요약했어요...👀</h3>
      <styles.SubtitleList>
        {resultData.subtitles.map((data, index) => (
          <styles.Subtitle key={data.subtitleId}>
            <div>
              <styles.SubtitleNumber>{index + 1}</styles.SubtitleNumber>{' '}
              {data.subtitle}
            </div>
          </styles.Subtitle>
        ))}
      </styles.SubtitleList>
    </styles.Container>
  );
};

export default SubTitleContainer;
