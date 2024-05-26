import styled from 'styled-components';

const styles = {
  Container: styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #0075ff;
    border-radius: 16px;
    padding: 8px 6px;
  `,
  Icon: styled.div`
    display: flex;
    align-items: center;
    border: 2px solid #0075ff;
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
  `,
};

export default styles;
