import styled from 'styled-components';

const styles = {
  InputWrapper: styled.div`
    background-color: #efefef;
    border-radius: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 24px;
    margin-bottom: 16px;
  `,
  AddressInput: styled.input`
    width: 85%;
    border: 0;
    outline: none;
    background-color: #efefef;
    font-size: 20px;

    &::placeholder {
      color: #969696;
    }
  `,
  Button: styled.div`
    background-color: #ffffff;
    color: #0075ff;
    padding: 8px 22px;
    white-space: nowrap;
    border-radius: 10px;
    cursor: pointer;
  `,
};

export default styles;
