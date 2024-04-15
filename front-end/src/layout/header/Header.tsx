import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

import HamburgerMenuImage from '@assets/header/HamburgerMenu.svg';
import HamburgerMenu from '@layout/hamburgerMenu/HamburgerMenu';

import styles from './styles';
import LoginSignUpButtonComponent from '@components/commonComponent/loginSignUpButtonComponent/loginSignUpButtonComponent';

const Header: React.FC = () => {
  //const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const handleOpenHamburgerMenu = () => {
    setHamburgerMenuOpen(true);
  };

  const handleCloseHameburgerMenu = () => {
    setHamburgerMenuOpen(false);
  };

  const handleSignIn = () => {
    handleCloseHameburgerMenu();
    setIsLoggedIn(true);
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
              <styles.Name>OO</styles.Name>님 안녕하세요
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
