import React from 'react';

import { useRecoilValue } from 'recoil';
import { userInfo, loggedInState } from 'recoil/recoil';

import HamburgerMenuButton from '@components/hamburgerMenu/hamburgerMenuButton';
import LoginSignUpButtonComponent from '@components/commonComponent/loginSignUpButton/loginSignUpButton';

import styles from './styles';

const HamburgerMenu: React.FC<{
  handleCloseHameburgerMenu: () => void;
  handleSignIn: () => void;
}> = ({ handleCloseHameburgerMenu, handleSignIn }) => {
  const isLoggedIn = useRecoilValue(loggedInState);
  const userinfo = useRecoilValue(userInfo);

  return (
    <styles.Container>
      <styles.UpperContainer>
        <styles.Greeting>
          {isLoggedIn ? (
            <div>
              <styles.Name>{userinfo.userName}</styles.Name>님 반가워요!
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
