import React from 'react';
import CloseHambergerMenuButton from '../../assets/header/CloseHamburgerMenu.svg';

import styles from './styles';
import HamburgerMenuButton from '../../components/hamburgerMenuComponent/hamburgerMenuButton';

const HamburgerMenu: React.FC<{ handleHamburgerMenu: () => void }> = ({
  handleHamburgerMenu,
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
          onClick={handleHamburgerMenu}
        />
      </styles.UpperContainer>

      <styles.ButtonContainer>
        <HamburgerMenuButton buttonName="변환하기" address="/convert" />
        <HamburgerMenuButton buttonName="요약하기" address="/summarize" />
        <HamburgerMenuButton buttonName="저장된 스크립트" address="/myscript" />
        <HamburgerMenuButton buttonName="마이페이지" address="/mypage" />
      </styles.ButtonContainer>
    </styles.Container>
  );
};

export default HamburgerMenu;
