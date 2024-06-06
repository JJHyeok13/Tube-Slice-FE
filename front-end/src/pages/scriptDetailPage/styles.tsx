import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 90%;
    height: 100vh;
    margin: 120px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 170px;
  `,
  LeftWrapper: styled.div`
    width: 50%;
    height: calc(100% - 70px);
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    border-right: 1px solid black;
    overflow-y: scroll;
  `,
  RightWrapper: styled.div`
    width: 45%;
    height: 70%;
    overflow-y: scroll;
  `,
  MenuWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;
  `,
  SaveButton: styled.div`
    background-color: #ffffff;
    color: #0075ff;
    border: 2px solid #0075ff;
    border-radius: 12px;

    box-sizing: border-box;
    padding: 10px 16px;
    cursor: pointer;
  `,
  KeywordContainer: styled.div`
    display: flex;
    position: relative;
  `,
  Keyword: styled.span`
    display: inline-block;
    background-color: #ffffff;
    color: #0075ff;
    border: 1px solid #0075ff;
    border-radius: 16px;
    padding: 2px 14px;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  `,
  KeywordInput: styled.input`
    width: 270px;
    height: 30px;
    font-size: 16px;
    font-weight: 600;
    border: 0;
  `,
  Modal: styled.div<{ isVisible: boolean }>`
    position: absolute;
    background-color: #535458;
    color: #ffffff;
    padding: 10px;
    font-size: 12px;
    z-index: 1000;
    top: 40px;

    max-height: ${({ isVisible }) => (isVisible ? '200px' : '0')};
    overflow: hidden;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  `,
};

export default styles;
