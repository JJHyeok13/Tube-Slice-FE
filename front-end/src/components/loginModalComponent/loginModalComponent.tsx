import React, { useEffect } from 'react';

import styles from './styles';

import ExitButton from '@assets/loginModal/ExitButton.svg';
import KakaoLoginButton from '@assets/loginModal/KakaoLoginButton.svg';
import NaverLoginButton from '@assets/loginModal/NaverLoginButton.svg';

interface Props {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModalComponent: React.FC<Props> = ({
  setIsLoggedIn,
  setLoginModalOpen,
}) => {
  useEffect(() => {
    // 모달이 열리면 뒤쪽의 스크롤을 막음
    document.body.style.overflow = 'hidden';

    // 컴포넌트가 언마운트될 때 스타일 제거하여 스크롤이 다시 활성화되도록 함
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleLogin = () => {
    setLoginModalOpen(false);
    setIsLoggedIn(true);
  };

  const handleClose = () => {
    setLoginModalOpen(false);
  };

  return (
    <styles.ModalBackdrop>
      <styles.Modal>
        <styles.ExitButton src={ExitButton} alt="닫기" onClick={handleClose} />

        <styles.TubeSlice>Tube Slice</styles.TubeSlice>
        <styles.Description>한줄로 웹페이지 소개</styles.Description>
        <styles.ButtonWrapper>
          <styles.SocialLoginButton
            src={KakaoLoginButton}
            alt="카카오 로그인 버튼"
            onClick={handleLogin}
          />
          <styles.SocialLoginButton
            src={NaverLoginButton}
            alt="네이버 로그인 버튼"
            onClick={handleLogin}
          />
        </styles.ButtonWrapper>
      </styles.Modal>
    </styles.ModalBackdrop>
  );
};

export default LoginModalComponent;
