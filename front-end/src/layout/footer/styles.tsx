import styled from 'styled-components';

const styles = {
  FooterWrapper: styled.div`
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 8%;
    background-color: #777777;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `,
  Content: styled.div`
    padding: 10px;
  `,
};

export default styles;
