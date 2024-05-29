import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useRecoilValue } from 'recoil';
import { userInfo, loggedInState } from 'recoil/recoil';

import LoginSignUpButtonComponent from '@components/commonComponent/loginSignUpButton/loginSignUpButton';
import LoginModalComponent from '@components/loginSignIn/loginSignUpModal/loginSignUpModal';
import OptionModal from '@layout/optionModal/optionModal';

import styles from './styles';

const Header: React.FC = () => {
  const isLoggedIn = useRecoilValue(loggedInState);
  const userinfo = useRecoilValue(userInfo);
  const navigate = useNavigate();
  const outside = useRef<any>();

  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [optionModalOpen, setOptionModalOpen] = useState<boolean>(false);

  const handleSignIn = () => {
    setLoginModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.replace('/');
  };

  const handleSetting = () => {
    navigate('/setting/myrecord');
  };

  const handleOptionModalOpen = () => {
    setOptionModalOpen(true);
  };

  const handleOptionModalClose = () => {
    setOptionModalOpen(false);
  };

  const handlerOutsie = (e: any) => {
    if (!outside.current.contains(e.target)) {
      //현재 클릭한 곳이 메뉴 컴포넌트 안이 아니면 닫기
      handleOptionModalClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);
    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  });

  https: return (
    <>
      <styles.Container>
        <styles.HeaderWrapper>
          <styles.StyledLink to="/">Tube Slice</styles.StyledLink>
          <styles.RightWrapper>
            {isLoggedIn ? (
              <>
                <styles.Nickname>
                  <styles.Name>{userinfo.userName}</styles.Name>님 반가워요!
                </styles.Nickname>

                {optionModalOpen ? (
                  <styles.CloseOptionButton onClick={handleOptionModalClose} />
                ) : (
                  <styles.OpenOptionButton onClick={handleOptionModalOpen} />
                )}

                <styles.Button onClick={handleLogout}>로그아웃</styles.Button>
              </>
            ) : (
              <LoginSignUpButtonComponent onClick={handleSignIn} />
            )}

            <styles.SettingButton size={24} onClick={handleSetting} />
          </styles.RightWrapper>
        </styles.HeaderWrapper>
      </styles.Container>

      {loginModalOpen && (
        <styles.ModalBackdrop>
          <LoginModalComponent setLoginModalOpen={setLoginModalOpen} />
        </styles.ModalBackdrop>
      )}

      {optionModalOpen && (
        <div ref={outside}>
          <OptionModal handleOptionModalClose={handleOptionModalClose} />
        </div>
      )}
    </>
  );
};

export default Header;
