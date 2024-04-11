import React, { useState } from 'react';

import InputAddressComponent from '@components/commonComponent/inputAddressComponent/inputAddressComponent';
import RecommendVideoComponent from '@components/commonComponent/recommendVideoComponent/recommendVideoComponent';
import ProgressBarComponent from '@components/commonComponent/progressBarComponent/progressBarComponent';

import styles from './styles';

const SummarizePage: React.FC = () => {
  const [isProgressing, setIsProgressing] = useState(false);

  const handleStart = () => {
    setIsProgressing(!isProgressing);
  };

  return (
    <styles.Container>
      <styles.UpperWrapper>
        <InputAddressComponent
          description="요약할 영상의 링크를 넣어주세요..."
          buttonName="요약하기"
          handleStart={handleStart}
        />
        {isProgressing && <ProgressBarComponent />}
      </styles.UpperWrapper>

      <RecommendVideoComponent />
    </styles.Container>
  );
};

export default SummarizePage;
