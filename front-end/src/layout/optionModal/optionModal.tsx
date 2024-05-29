import React from 'react';

import { useRecoilValue } from 'recoil';
import { userInfo } from 'recoil/recoil';

import styles from './styles';

const OptionModal: React.FC<{
  handleOptionModalClose: () => void;
}> = ({ handleOptionModalClose }) => {
  const userinfo = useRecoilValue(userInfo);

  return (
    <styles.Container>
      <styles.StyledLink to="/myscript" onClick={handleOptionModalClose}>
        저장된 스크립트
      </styles.StyledLink>
      <styles.StyledLink
        to={`/mypage/${userinfo.userId}`}
        onClick={handleOptionModalClose}
      >
        마이페이지
      </styles.StyledLink>
      <styles.StyledLink to="/post/recent" onClick={handleOptionModalClose}>
        게시판
      </styles.StyledLink>
    </styles.Container>
  );
};

export default OptionModal;
