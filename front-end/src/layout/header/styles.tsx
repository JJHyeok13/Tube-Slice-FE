import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { RiMenuLine } from 'react-icons/ri';

const styles = {
  Container: styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 8px;
    background-color: #ffffff;
    transition: top 0.3s ease-in-out;
  `,
  HeaderWrapper: styled.div`
    width: 100%;
    height: 62px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
  `,
  StyledLink: styled(Link)`
    font-family: 'SF_HambakSnow';
    font-size: 32px;
    font-weight: 800;
    color: #0075ff;
    margin-left: 30px;
  `,
  RightWrapper: styled.div`
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 30px;
  `,
  Nickname: styled.div`
    font-weight: 500;
  `,
  Name: styled.span`
    color: #0075ff;
  `,
  OpenButton: styled(RiMenuLine)`
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
