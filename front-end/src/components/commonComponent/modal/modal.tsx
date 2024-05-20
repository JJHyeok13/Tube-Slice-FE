import React from 'react';
import styled from 'styled-components';

const StyleModal = styled.div`
  width: 130px;
  height: 118px;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 999;
  background-color: #ffffff;
  top: 15%;
  .triangle {
    width: 30px;
    background-color: #ffffff;
    height: 30px;
    border-radius: 4px;
    box-shadow: -2px 2px rgb(178 178 178 / 0.3);
    transform: rotate(135deg);
    position: absolute;
    z-index: 1000;
  }
`;

const Modal: React.FC = () => {
  return (
    <StyleModal>
      <div className="triangle"></div>
      <div>
        <p>마이페이지</p>
        <p>로그아웃</p>
      </div>
    </StyleModal>
  );
};

export default Modal;
