import React from 'react';

import MainLeftComponent from '../../components/mainPageComponent/mainLeftComponent/mainLeftComponent';
import MainRightComponent from '../../components/mainPageComponent/mainRightComponent/mainRightComponent';

import styles from './styles';

const MainPage: React.FC = () => {
  return (
    <styles.Container>
      <MainLeftComponent />
      <MainRightComponent />
    </styles.Container>
  );
};

export default MainPage;
