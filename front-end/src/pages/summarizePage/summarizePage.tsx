import React from 'react';

import styles from './styles';
import InputAddressComponent from '../../components/commonComponent/inputAddressComponent/inputAddressComponent';

const SummarizePage: React.FC = () => {
  return (
    <styles.Container>
      <InputAddressComponent
        description="요약할 영상의 링크를 넣어주세요..."
        buttonName="요약하기"
      />
    </styles.Container>
  );
};

export default SummarizePage;
