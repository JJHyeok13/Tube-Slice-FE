import React, { useState } from 'react';

import InputAddressComponent from '@components/commonComponent/inputAddress/inputAddress';
import ProgressBarComponent from '@components/commonComponent/progressBar/progressBar';
import RecommendVideoComponent from '@components/commonComponent/recommendVideo/recommendVideo';

import styles from './styles';

const ConvertPage: React.FC = () => {
  const [isProgressing, setIsProgressing] = useState(false);

  const handleStart = () => {
    setIsProgressing(!isProgressing);
  };

  return (
    <styles.Container>
      <styles.UpperWrapper>
        <InputAddressComponent
          description="스크립트를 생성할 영상 링크를 넣어주세요..."
          buttonName="변환하기"
          handleStart={handleStart}
        />
        {isProgressing && <ProgressBarComponent />}
      </styles.UpperWrapper>
      <RecommendVideoComponent />
    </styles.Container>
  );
};

export default ConvertPage;
