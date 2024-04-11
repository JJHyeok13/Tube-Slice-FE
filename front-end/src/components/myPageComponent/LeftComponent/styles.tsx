import styled from 'styled-components';
import { Link } from 'react-router-dom';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 154px;
    height: 312px;
    background-color: #efefef;
    border-radius: 15px;
  `,
  List: styled(Link)`
    color: #969696;
    cursor: pointer;
  `,
};

export default styles;
