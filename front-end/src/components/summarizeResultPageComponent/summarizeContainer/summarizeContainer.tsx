import React from 'react';

import { SummarizeResultProps } from 'types/summarizeResultPage/summarizeResultPage';

import styles from './styles';

const SummarizeContainer: React.FC<SummarizeResultProps> = ({ summaries }) => {
  const numberIndex: string[] = [
    '1️⃣',
    '2️⃣',
    '3️⃣',
    '4️⃣',
    '5️⃣',
    '6️⃣',
    '7️⃣',
    '8️⃣',
    '9️⃣',
    '🔟',
  ];

  return (
    <styles.Container>
      <styles.Title>👀 스크립트를 요약했어요...</styles.Title>
      <styles.SummarizeContainer>
        {/* @ts-ignore */}
        {summaries.summaries.map((summarize, index: number) => (
          <styles.Summarize key={summarize.id}>
            {numberIndex[index]}{' '}
            {summarize.message.endsWith(',')
              ? summarize.message.slice(0, -1)
              : summarize.message}
          </styles.Summarize>
        ))}
      </styles.SummarizeContainer>
    </styles.Container>
  );
};

export default SummarizeContainer;
