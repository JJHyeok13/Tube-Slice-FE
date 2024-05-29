import React from 'react';

import { SummarizeResultProps } from 'types/summarizeResultPage/summarizeResultPage';

import styles from './styles';

const SummarizeContainer: React.FC<SummarizeResultProps> = ({
  summarizeResultData,
}) => {
  return (
    <styles.Container>
      <div>스크립트를 요약했어요...</div>
      <styles.SummarizeContainer>
        {summarizeResultData.map((summarize) => (
          <div key={summarize.id}>{summarize.message}</div>
        ))}
      </styles.SummarizeContainer>
    </styles.Container>
  );
};

export default SummarizeContainer;
