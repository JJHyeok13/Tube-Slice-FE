import React from 'react';
import CloseHambergerMenuButton from '@assets/header/CloseHamburgerMenu.svg';

import styles from './styles';
import HamburgerMenuButton from '@components/hamburgerMenuComponent/hamburgerMenuButton';

const HamburgerMenu: React.FC<{ handleCloseHameburgerMenu: () => void }> = ({
  handleCloseHameburgerMenu,
}) => {
  return (
    <styles.Container>
      <styles.UpperContainer>
        <styles.Greeting>
          <styles.Name>OO</styles.Name>
          <span>님 반가워요!</span>
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
          buttonName="마이페이지"
          address="/mypage/myrecord"
          closeHamburgerMenu={handleCloseHameburgerMenu}
        />
      </styles.ButtonContainer>
    </styles.Container>
  );
};

export default HamburgerMenu;
