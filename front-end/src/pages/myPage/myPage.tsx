import React from 'react';

import styles from './styles';
import LeftComponent from '../../components/myPageComponent/LeftComponent/LeftComponent';

const MyPage: React.FC = () => {
  return (
    <styles.Container>
      <LeftComponent />
    </styles.Container>
  );
};

export default MyPage;
