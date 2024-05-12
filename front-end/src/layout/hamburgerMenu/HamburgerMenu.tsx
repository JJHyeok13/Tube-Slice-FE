import React from 'react';

import styles from './styles';
import HamburgerMenuButton from '@components/hamburgerMenu/hamburgerMenuButton';
import LoginSignUpButtonComponent from '@components/commonComponent/loginSignUpButton/loginSignUpButton';

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
              <styles.Name>눈꽃</styles.Name>님 반가워요!
            </div>
          ) : (
            <LoginSignUpButtonComponent onClick={handleSignIn} />
          )}
        </styles.Greeting>

        <styles.CloseButton onClick={handleCloseHameburgerMenu} />
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
          buttonName="마이 페이지"
          address="/mypage"
          closeHamburgerMenu={handleCloseHameburgerMenu}
        />
        <HamburgerMenuButton
          buttonName="게시판"
          address="/board/recent"
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
