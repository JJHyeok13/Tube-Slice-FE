import React from 'react';

import styles from './styles';

const Footer: React.FC = () => {
  return (
    <>
      <styles.FooterWrapper>
        <styles.Content>문의하기</styles.Content>
        <styles.Content>고객센터</styles.Content>
      </styles.FooterWrapper>
    </>
  );
};

export default Footer;
