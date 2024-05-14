import React from 'react';
import { useNavigate } from 'react-router-dom';

import { HamburgerMenuProps } from 'types/hamburgerMenu/hamburgerMenu';

import styles from './styles';

const HamburgerMenuButton: React.FC<HamburgerMenuProps> = ({
  buttonName,
  address,
  closeHamburgerMenu,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(address);
    closeHamburgerMenu();
  };
  return <styles.Button onClick={handleClick}>{buttonName}</styles.Button>;
};

export default HamburgerMenuButton;
