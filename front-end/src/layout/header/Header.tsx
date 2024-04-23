import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

import HamburgerMenuImage from '@assets/header/HamburgerMenu.svg';
import HamburgerMenu from '@layout/hamburgerMenu/HamburgerMenu';

import styles from './styles';
import LoginSignUpButtonComponent from '@components/commonComponent/loginSignUpButton/loginSignUpButton';
import LoginModalComponent from '@components/loginSignIn/loginSignUpModal/loginSignUpModal';
import CompleteModal from '@components/loginSignIn/completeModal/completeModal';
import ProfileSettingModal from '@components/loginSignIn/profileSettingModal/profileSettingModal';

const Header: React.FC = () => {
  //const navigate = useNavigate();
  const isServiceMember = false;

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [completeModalOpen, setCompleteModalOpen] = useState(false);
  const [profileSettingModalOpen, setProfileSettingModalOpen] = useState(false);

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
    //navigate('/signin');
  };

  const handleFirstUser = () => {
    if (isServiceMember) {
      setLoginModalOpen(false);
      setIsLoggedIn(true);
    } else {
      setLoginModalOpen(false);
      setCompleteModalOpen(true);
    }
  };

  const handleFirstProfileSetting = () => {
    setCompleteModalOpen(false);
    setProfileSettingModalOpen(true);
  };

  return (
    <>
      <styles.HeaderWrapper>
        <styles.StyledLink to="/" onClick={handleCloseHamburgerMenu}>
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
        <styles.ModalBackdrop>
          <LoginModalComponent
            setLoginModalOpen={setLoginModalOpen}
            handleFirstUser={handleFirstUser}
          />
        </styles.ModalBackdrop>
      )}

      {completeModalOpen && (
        <styles.ModalBackdrop>
          <CompleteModal
            setCompleteModalOpen={setCompleteModalOpen}
            handleFirstProfileSetting={handleFirstProfileSetting}
          />
        </styles.ModalBackdrop>
      )}

      {profileSettingModalOpen && (
        <styles.ModalBackdrop>
          <ProfileSettingModal
            setProfileSettingModalOpen={setProfileSettingModalOpen}
          />
        </styles.ModalBackdrop>
      )}

      {hamburgerMenuOpen && (
        <HamburgerMenu
          handleCloseHameburgerMenu={handleCloseHamburgerMenu}
          isLoggedIn={isLoggedIn}
          handleSignIn={handleSignIn}
        />
      )}
    </>
  );
};

export default Header;
