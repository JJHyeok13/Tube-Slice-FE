import React from 'react';

import MainLeftComponent from '@components/signInPageComponent/signInLeftComponent/signInLeftComponent';
import MainRightComponent from '@components/signInPageComponent/signInRightComponent/signInRightComponent';

import styles from './styles';

const SignInPage: React.FC = () => {
  return (
    <styles.Container>
      <MainLeftComponent />
      <MainRightComponent />
    </styles.Container>
  );
};

export default SignInPage;
