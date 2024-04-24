import styled from 'styled-components';

const styles = {
  Modal: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 12px;
    background-color: #ffffff;
    z-index: 1002;
  `,
  ExitButton: styled.img`
    margin-left: auto;
    cursor: pointer;
    position: fixed;
    top: 0;
    right: 0;
    padding: 5px;
  `,
  UpperWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 64px;
  `,
  TubeSlice: styled.div`
    height: 25%;
    display: flex;
    align-items: center;
    font-family: 'SF_HambakSnow';
    font-size: 32px;
    font-weight: 800;
    color: #0075ff;
    margin-bottom: 32px;
  `,
  Greeting: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4px;
    font-size: 28px;
    font-weight: 500;
  `,
  Question: styled.div`
    text-align: center;
  `,
  ButtonWrapper: styled.div`
    width: 215px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  YesButton: styled.div`
    cursor: pointer;
    padding: 6px 16px;
    color: #ffffff;
    background-color: #0075ff;
    border-radius: 10px;
  `,
  NoButton: styled.div`
    cursor: pointer;
    padding: 6px 16px;
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 10px;
  `,
};

export default styles;
