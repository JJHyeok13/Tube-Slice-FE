import React, { useEffect } from 'react';

import styles from './styles';

import ExitButton from '@assets/loginModal/ExitButton.svg';
import KakaoLoginButton from '@assets/loginModal/KakaoLoginButton.svg';
import NaverLoginButton from '@assets/loginModal/NaverLoginButton.svg';

import { LoginSignUpModalProps } from 'types/loginSignUp/loginSignUpModal';

const LoginSignUpModal: React.FC<LoginSignUpModalProps> = ({
  setLoginModalOpen,
}) => {
  const kakao_client_id = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const kakao_redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const naver_client_id = import.meta.env.VITE_NAVER_REST_API_KEY;
  const naver_redirect_uri = import.meta.env.VITE_NAVER_REDIRECT_URI;
  const naver_state = import.meta.env.VITE_NAVER_STATE_STRING;

  const kakaoLoginURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${kakao_client_id}&redirect_uri=${kakao_redirect_uri}`;
  const naverLoginURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${naver_client_id}&state=${naver_state}&redirect_uri=${naver_redirect_uri}
`;

  useEffect(() => {
    // 모달이 열리면 뒤쪽의 스크롤을 막음
    document.body.style.overflow = 'hidden';
    // 컴포넌트가 언마운트될 때 스타일 제거하여 스크롤이 다시 활성화되도록 함
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    setLoginModalOpen(false);
  };

  return (
    <>
      <styles.Modal>
        <styles.ExitButton src={ExitButton} alt="닫기" onClick={handleClose} />

        <styles.TubeSlice>Tube Slice</styles.TubeSlice>
        <styles.Description>한줄로 웹페이지 소개</styles.Description>
        <styles.ButtonWrapper>
          <a href={kakaoLoginURL}>
            <styles.SocialLoginButton
              src={KakaoLoginButton}
              alt="카카오 로그인 버튼"
            />
          </a>

          <a href={naverLoginURL}>
            <styles.SocialLoginButton
              src={NaverLoginButton}
              alt="네이버 로그인 버튼"
            />
          </a>
        </styles.ButtonWrapper>
      </styles.Modal>
    </>
  );
};

export default LoginSignUpModal;
