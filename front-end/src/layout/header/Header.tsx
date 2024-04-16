import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

import HamburgerMenuImage from '@assets/header/HamburgerMenu.svg';
import HamburgerMenu from '@layout/hamburgerMenu/HamburgerMenu';

import styles from './styles';
import LoginSignUpButtonComponent from '@components/commonComponent/loginSignUpButtonComponent/loginSignUpButtonComponent';
import LoginModalComponent from '@components/loginModalComponent/loginModalComponent';

const Header: React.FC = () => {
  //const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const handleOpenHamburgerMenu = () => {
    setHamburgerMenuOpen(true);
  };

  const handleCloseHameburgerMenu = () => {
    setHamburgerMenuOpen(false);
  };

  const handleSignIn = () => {
    setLoginModalOpen(true);
    setHamburgerMenuOpen(false);
    //navigate('/signin');
  };

  return (
    <>
      <styles.HeaderWrapper>
        <styles.StyledLink to="/" onClick={handleCloseHameburgerMenu}>
          Tube Slice
        </styles.StyledLink>
        <styles.RightWrapper>
          {isLoggedIn ? (
            <styles.Nickname>
              <styles.Name>눈꽃</styles.Name>님 반가워요!
            </styles.Nickname>
          ) : (
            <LoginSignUpButtonComponent onClick={handleSignIn} />
          )}
          <styles.OpenButton
            src={HamburgerMenuImage}
            alt="햄버거 메뉴 버튼"
            onClick={handleOpenHamburgerMenu}
          />
        </styles.RightWrapper>
      </styles.HeaderWrapper>

      {loginModalOpen && (
        <LoginModalComponent
          setIsLoggedIn={setIsLoggedIn}
          setLoginModalOpen={setLoginModalOpen}
        />
      )}

      {hamburgerMenuOpen && (
        <HamburgerMenu
          handleCloseHameburgerMenu={handleCloseHameburgerMenu}
          isLoggedIn={isLoggedIn}
          handleSignIn={handleSignIn}
        />
      )}
    </>
  );
};

export default Header;
