import React, { useState } from 'react';
import HamburgerMenuImage from '../../assets/header/HamburgerMenu.svg';

import styles from './styles';
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const handleHamburgerMenu = () => {
    setHamburgerMenuOpen(!hamburgerMenuOpen);
  };

  return (
    <>
      <styles.HeaderWrapper>
        <styles.StyledLink to="/">Tube Slice</styles.StyledLink>
        <styles.RightWrapper>
          <styles.LoginButton onClick={handleSignIn}>
            로그인/회원가입
          </styles.LoginButton>
          <styles.OpenButton
            src={HamburgerMenuImage}
            alt="햄버거 메뉴 버튼"
            onClick={handleHamburgerMenu}
          />
        </styles.RightWrapper>
      </styles.HeaderWrapper>

      {hamburgerMenuOpen && (
        <HamburgerMenu handleHamburgerMenu={handleHamburgerMenu} />
      )}
    </>
  );
};

export default Header;
