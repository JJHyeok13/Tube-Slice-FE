import React, { useState } from 'react';
import HamburgerMenuImage from '../../assets/header/HamburgerMenu.svg';

import styles from './styles';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const handleOpenHamburgerMenu = () => {
    setHamburgerMenuOpen(true);
  };

  const handleCloseHameburgerMenu = () => {
    setHamburgerMenuOpen(false);
  };

  const handleSignIn = () => {
    handleCloseHameburgerMenu();
    navigate('/signin');
  };

  return (
    <>
      <styles.HeaderWrapper>
        <styles.StyledLink to="/" onClick={handleCloseHameburgerMenu}>
          Tube Slice
        </styles.StyledLink>
        <styles.RightWrapper>
          <styles.LoginButton onClick={handleSignIn}>
            로그인/회원가입
          </styles.LoginButton>
          <styles.OpenButton
            src={HamburgerMenuImage}
            alt="햄버거 메뉴 버튼"
            onClick={handleOpenHamburgerMenu}
          />
        </styles.RightWrapper>
      </styles.HeaderWrapper>

      {hamburgerMenuOpen && (
        <HamburgerMenu handleCloseHameburgerMenu={handleCloseHameburgerMenu} />
      )}
    </>
  );
};

export default Header;
