import React from 'react';

import styles from './styles';

interface Subtitle {
  id: number;
  subtitle: string;
  timeline: string;
}

interface ResultData {
  url: string;
  subtitles: Subtitle[];
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
          <div key={data.id}>
            <div>
              {index + 1} {data.subtitle}
            </div>
          </div>
        ))}
      </styles.SubtitleList>
    </styles.Container>
  );
};

export default SubTitleContainer;
