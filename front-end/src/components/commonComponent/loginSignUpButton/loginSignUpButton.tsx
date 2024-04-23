import React from 'react';

import styles from './styles';

interface Props {
  onClick: () => void;
}

const LoginSignUpButton: React.FC<Props> = ({ onClick }) => {
  return (
    <styles.LoginButton onClick={onClick}>로그인/회원가입</styles.LoginButton>
  );
};

export default LoginSignUpButton;