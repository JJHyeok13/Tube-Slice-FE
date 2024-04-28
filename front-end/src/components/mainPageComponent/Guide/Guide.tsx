import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles';

import { GuideComponentProps } from 'types/mainPage/mainPage';

const Guide: React.FC<GuideComponentProps> = ({
  src,
  address,
  description,
  hoverdDescription,
}) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    navigate(`/${address}`);
  };

  return (
    <styles.GuideContainer>
      <styles.GuideImage src={src} />
      <styles.GuideDescription
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {hovered ? hoverdDescription : description}
      </styles.GuideDescription>
    </styles.GuideContainer>
  );
};

export default Guide;
