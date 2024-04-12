import React from 'react';

import IconImage from '@assets/signInPage/TubeSliceLogo.svg';

import styles from './styles';

const MainLeftComponent: React.FC = () => {
  return (
    <styles.Container>
      <img src={IconImage} alt="로고 이미지" />
    </styles.Container>
  );
};

export default MainLeftComponent;
