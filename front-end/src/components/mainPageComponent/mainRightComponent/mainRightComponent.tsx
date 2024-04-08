import React from 'react';

import KakaoLoginBtnImage from '../../../assets/mainPage/KakaoLoginBtn.svg';
import NaverLoginBtnImage from '../../../assets/mainPage/NaverLoginBtn.svg';
import GuestLoginBtnImage from '../../../assets/mainPage/GuestLoginBtn.svg';

import styles from './styles';

const MainRightComponent: React.FC = () => {
  return (
    <styles.ButtonWrapper>
      <img src={KakaoLoginBtnImage} alt="카카오 로그인 버튼" />
      <img src={NaverLoginBtnImage} alt="네이버 로그인 버튼" />
      <img src={GuestLoginBtnImage} alt="게스트 로그인 버튼" />
      <div style={{ color: 'gray', textAlign: 'center' }}>회원가입</div>
    </styles.ButtonWrapper>
  );
};

export default MainRightComponent;
