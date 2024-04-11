import React from 'react';

import MainLeftComponent from '../../components/signInPageComponent/signInLeftComponent/signInLeftComponent';
import MainRightComponent from '../../components/signInPageComponent/signInRightComponent/signInRightComponent';

import styles from './styles';
import { Link } from 'react-router-dom';

const SignInPage: React.FC = () => {
  return (
    <styles.Container>
      <MainLeftComponent />
      <MainRightComponent />
      <Link to="/">메인페이지 가기</Link>
    </styles.Container>
  );
};

export default SignInPage;
