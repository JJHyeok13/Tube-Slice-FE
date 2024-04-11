import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './styles';

interface Props {
  src: string;
  address: string;
  description: string;
  hoverdDescription: string;
}

const GuideComponent: React.FC<Props> = ({
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

export default GuideComponent;
