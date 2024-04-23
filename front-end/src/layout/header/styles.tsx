import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  HeaderWrapper: styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 62px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 45px;
    padding-bottom: 15px;
    border-bottom: 1px solid #000000;
    background-color: #ffffff;
    z-index: 1;
  `,
  StyledLink: styled(Link)`
    font-family: 'SF_HambakSnow';
    font-size: 32px;
    font-weight: 800;
    color: #0075ff;
  `,
  RightWrapper: styled.div`
    width: 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Nickname: styled.div`
    font-weight: 500;
  `,
  Name: styled.span`
    color: #0075ff;
  `,

  OpenButton: styled.img`
    cursor: pointer;
  `,
  ModalBackdrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
  `,
};

export default styles;
