import React from 'react';

import styles from './styles';
import InputAddressComponent from '../../components/commonComponent/inputAddressComponent/inputAddressComponent';
import RecommendVideoComponent from '../../components/commonComponent/recommendVideoComponent/recommendVideoComponent';

const ConvertPage: React.FC = () => {
  return (
    <styles.Container>
      <InputAddressComponent
        description="스크립트를 생성할 영상의 링크를 넣어주세요..."
        buttonName="변환하기"
      />
      <RecommendVideoComponent />
    </styles.Container>
  );
};

export default ConvertPage;
