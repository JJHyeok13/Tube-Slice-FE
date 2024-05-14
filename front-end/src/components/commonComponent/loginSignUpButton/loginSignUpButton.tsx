import React from 'react';

import { LoginSignUpButtonProps } from 'types/common/loginSignUpButton';

import styles from './styles';

const LoginSignUpButton: React.FC<LoginSignUpButtonProps> = ({ onClick }) => {
  return (
    <styles.LoginButton onClick={onClick}>로그인/회원가입</styles.LoginButton>
  );
};

export default LoginSignUpButton;
