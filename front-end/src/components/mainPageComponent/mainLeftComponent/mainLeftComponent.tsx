import React from 'react';

import LogoImage from '../../../assets/mainPage/Logo.svg';

const MainLeftComponent: React.FC = () => {
  return (
    <div>
      <img src={LogoImage} alt="로고 이미지" />
    </div>
  );
};

export default MainLeftComponent;
