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
    margin-top: 45px;
    border-bottom: 1px solid #000000;
  `,
  StyledLink: styled(Link)`
    font-family: 'SF_HambakSnow';
    font-size: 32px;
    font-weight: 800;
    color: #0075ff;
  `,
  RightWrapper: styled.div`
    width: 204px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  LoginButton: styled.div`
    border: 1px solid #000000;
    border-radius: 50px;
    padding: 10px 20px;
    cursor: pointer;
  `,
  OpenButton: styled.img`
    cursor: pointer;
  `,
};

export default styles;
