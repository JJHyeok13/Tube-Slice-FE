import React from 'react';

import styles from './styles';

import { ResultDataProps } from 'types/convertResultPage/convertResultPage';

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
