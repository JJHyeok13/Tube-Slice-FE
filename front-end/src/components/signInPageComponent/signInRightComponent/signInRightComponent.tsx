import React from 'react';

import KakaoLoginBtnImage from '../../../assets/signInPage/KakaoLoginButton.svg';
import NaverLoginBtnImage from '../../../assets/signInPage/NaverLoginButton.svg';
import GuestLoginBtnImage from '../../../assets/signInPage/GuestLoginButton.svg';

import styles from './styles';

const MainRightComponent: React.FC = () => {
  return (
    <styles.ButtonWrapper>
      <styles.Button src={KakaoLoginBtnImage} alt="카카오 로그인 버튼" />
      <styles.Button src={NaverLoginBtnImage} alt="네이버 로그인 버튼" />
      <styles.Button src={GuestLoginBtnImage} alt="게스트 로그인 버튼" />
      <div style={{ color: 'gray', textAlign: 'center' }}>회원가입</div>
    </styles.ButtonWrapper>
  );
};

export default MainRightComponent;
