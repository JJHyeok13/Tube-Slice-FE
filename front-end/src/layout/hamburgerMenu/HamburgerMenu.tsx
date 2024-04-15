import React from 'react';
import CloseHambergerMenuButton from '@assets/header/CloseHamburgerMenu.svg';

import styles from './styles';
import HamburgerMenuButton from '@components/hamburgerMenuComponent/hamburgerMenuButton';
import LoginSignUpButtonComponent from '@components/commonComponent/loginSignUpButtonComponent/loginSignUpButtonComponent';

const HamburgerMenu: React.FC<{
  handleCloseHameburgerMenu: () => void;
  isLoggedIn: boolean;
  handleSignIn: () => void;
}> = ({ handleCloseHameburgerMenu, isLoggedIn, handleSignIn }) => {
  return (
    <styles.Container>
      <styles.UpperContainer>
        <styles.Greeting>
          {isLoggedIn ? (
            <div>
              <styles.Name>OO</styles.Name>님 반가워요!
            </div>
          ) : (
            <LoginSignUpButtonComponent onClick={handleSignIn} />
          )}
        </styles.Greeting>

        <styles.CloseButton
          src={CloseHambergerMenuButton}
          alt="햄버거 메뉴 버튼"
          onClick={handleCloseHameburgerMenu}
        />
      </styles.UpperContainer>

      <styles.ButtonContainer>
        <HamburgerMenuButton
          buttonName="변환하기"
          address="/convert"
          closeHamburgerMenu={handleCloseHameburgerMenu}
        />
        <HamburgerMenuButton
          buttonName="요약하기"
          address="/summarize"
          closeHamburgerMenu={handleCloseHameburgerMenu}
        />
        <HamburgerMenuButton
          buttonName="저장된 스크립트"
          address="/myscript"
          closeHamburgerMenu={handleCloseHameburgerMenu}
        />
        <HamburgerMenuButton
          buttonName="게시판"
          address="/board"
          closeHamburgerMenu={handleCloseHameburgerMenu}
        />
        <HamburgerMenuButton
          buttonName="설정"
          address="/setting/myrecord"
          closeHamburgerMenu={handleCloseHameburgerMenu}
        />
      </styles.ButtonContainer>
    </styles.Container>
  );
};

export default HamburgerMenu;
