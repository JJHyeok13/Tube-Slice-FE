import styled from 'styled-components';

const styles = {
  Container: styled.div`
    background-color: #eeeeee;
    width: 344px;
    height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all 1s;
  `,

  UpperContainer: styled.div`
    width: 258px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 40px auto;
  `,

  Greeting: styled.div`
    font-size: 24px;
    font-weight: 500;
  `,

  Name: styled.span`
    color: #0075ff;
  `,

  CloseButton: styled.img`
    cursor: pointer;
  `,

  ButtonContainer: styled.div`
    width: 258px;
    height: 312px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `,
};

export default styles;
