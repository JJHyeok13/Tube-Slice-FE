import React from 'react';

import { SummarizeProps } from 'types/summarizeResultPage/summarizeResultPage';

import styles from './styles';

const SummarizeContainer: React.FC<SummarizeProps> = ({ resultData }) => {
  return (
    <styles.Container>
      <div>스크립트를 요약했어요...</div>
      <styles.SummarizeContainer>
        {resultData.summarizes.map((summarize) => (
          <div key={summarize.summarizeId}>{summarize.summarize}</div>
        ))}
      </styles.SummarizeContainer>
    </styles.Container>
  );
};

export default SummarizeContainer;
