import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles';

interface Props {
  buttonName: string;
  address: string;
  closeHamburgerMenu: () => void;
}

const HamburgerMenuButton: React.FC<Props> = ({
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
