import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles';

interface Props {
  buttonName: string;
  address: string;
}

const HamburgerMenuButton: React.FC<Props> = ({ buttonName, address }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(address);
  };
  return <styles.Button onClick={handleClick}>{buttonName}</styles.Button>;
};

export default HamburgerMenuButton;
