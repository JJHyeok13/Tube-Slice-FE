import React from 'react';
import styles from './styles';

const LeftComponent: React.FC = () => {
  return (
    <styles.Container>
      <styles.List to="/setting/myrecord">내 기록</styles.List>
      <styles.List to="/setting/profile">프로필 설정</styles.List>
      <styles.List to="/setting/delete">회원 탈퇴</styles.List>
    </styles.Container>
  );
};

export default LeftComponent;
