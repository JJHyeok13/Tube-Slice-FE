import React from 'react';

import styles from './styles';

import { dummyData } from './dummyData';

const SubTitleContainer: React.FC = () => {
  return (
    <styles.Container>
      <h3>스크립트를 요약했어요...👀</h3>
      <styles.SubtitleList>
        {dummyData.map((data, index) => (
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
