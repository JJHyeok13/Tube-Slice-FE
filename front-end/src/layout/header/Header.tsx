import React, { useState } from 'react';

import LoginSignUpButtonComponent from '@components/commonComponent/loginSignUpButton/loginSignUpButton';
import LoginModalComponent from '@components/loginSignIn/loginSignUpModal/loginSignUpModal';

import styles from './styles';
import { useRecoilValue } from 'recoil';
import { userInfo, loggedInState } from 'recoil/recoil';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const isLoggedIn = useRecoilValue(loggedInState);
  const userinfo = useRecoilValue(userInfo);
  const navigate = useNavigate();

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const handleSignIn = () => {
    setLoginModalOpen(true);
  };

  const handleMypage = () => {
    navigate(`/mypage/${userinfo.userId}`);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.replace('/');
  };

  const handleSetting = () => {
    navigate('/setting/myrecord');
  };

  return (
    <>
      <styles.Container>
        <styles.HeaderWrapper>
          <styles.StyledLink to="/">Tube Slice</styles.StyledLink>
          <Link to="/myscript">저장된 스크립트</Link>
          <Link to="/board/recent">게시판</Link>

          <styles.RightWrapper>
            {isLoggedIn ? (
              <>
                <styles.Nickname>
                  <styles.Name>{userinfo.userName}</styles.Name>님 반가워요!
                </styles.Nickname>
                <styles.Button onClick={handleMypage}>마이페이지</styles.Button>
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

      {/* {hamburgerMenuOpen && (
        <HamburgerMenu
          handleCloseHameburgerMenu={handleCloseHamburgerMenu}
          handleSignIn={handleSignIn}
        />
      )} */}
    </>
  );
};

export default Header;
