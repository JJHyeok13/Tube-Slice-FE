import React, { useState } from 'react';

import LoginSignUpButtonComponent from '@components/commonComponent/loginSignUpButton/loginSignUpButton';
import LoginModalComponent from '@components/loginSignIn/loginSignUpModal/loginSignUpModal';

import HamburgerMenu from '@layout/hamburgerMenu/HamburgerMenu';

import styles from './styles';
import { useRecoilValue } from 'recoil';
import { userInfo, loggedInState } from 'recoil/recoil';

const Header: React.FC = () => {
  const isLoggedIn = useRecoilValue(loggedInState);
  const userinfo = useRecoilValue(userInfo);

  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const handleOpenHamburgerMenu = () => {
    setHamburgerMenuOpen(true);
  };

  const handleCloseHamburgerMenu = () => {
    setHamburgerMenuOpen(false);
  };

  const handleSignIn = () => {
    setLoginModalOpen(true);
    setHamburgerMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.replace('/');
  };

  return (
    <>
      <styles.Container>
        <styles.HeaderWrapper>
          <styles.StyledLink to="/" onClick={handleCloseHamburgerMenu}>
            Tube Slice
          </styles.StyledLink>
          <styles.RightWrapper>
            {isLoggedIn ? (
              <>
                <styles.Nickname>
                  <styles.Name>{userinfo.userName}</styles.Name>님 반가워요!
                </styles.Nickname>
                <styles.Button onClick={handleLogout}>로그아웃</styles.Button>
              </>
            ) : (
              <LoginSignUpButtonComponent onClick={handleSignIn} />
            )}
            <styles.OpenButton size={24} onClick={handleOpenHamburgerMenu} />
          </styles.RightWrapper>
        </styles.HeaderWrapper>
      </styles.Container>

      {loginModalOpen && (
        <styles.ModalBackdrop>
          <LoginModalComponent setLoginModalOpen={setLoginModalOpen} />
        </styles.ModalBackdrop>
      )}

      {hamburgerMenuOpen && (
        <HamburgerMenu
          handleCloseHameburgerMenu={handleCloseHamburgerMenu}
          handleSignIn={handleSignIn}
        />
      )}
    </>
  );
};

export default Header;
