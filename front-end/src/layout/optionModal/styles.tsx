import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Container: styled.div`
    background-color: #ffffff;
    border: 1px solid #0075ff;
    border-radius: 16px;
    width: 150px;
    height: 150px;
    position: fixed;
    top: 72px;
    right: 120px;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 8px;
    transition: all 1s;

    &::after {
      content: '';
      position: absolute;
      top: -8px;
      right: 33px;
      width: 16px;
      height: 9px;
      background-image: url('https://t1.daumcdn.net/tistory_admin/static/top/pcrtn/layer_edge.png');
      background-size: 16px 9px;
    }
  `,
  StyledLink: styled(Link)`
    width: 90%;
    text-align: end;
    color: #0075ff;
    padding: 8px;
    border-bottom: 1px solid #eeeeee;

    &:hover {
      font-weight: 600;
      color: #000000;
    }

    &:last-child {
      border-bottom: 0;
    }
  `,
};

export default styles;
