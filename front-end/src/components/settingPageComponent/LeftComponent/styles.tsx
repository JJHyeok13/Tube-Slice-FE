import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 10%;
    height: 312px;
    background-color: #efefef;
    border-radius: 15px;
  `,
  List: styled(NavLink)`
    color: #969696;
    cursor: pointer;
    padding-left: 32px;

    &:hover {
      color: #0075ff;
    }

    &.active {
      color: #0075ff;
    }
  `,
};

export default styles;
