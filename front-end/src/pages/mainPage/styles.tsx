import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 90%;
    margin: 140px auto 0;
    display: flex;
    flex-direction: column;
    padding-bottom: 70px;
  `,
  OptionContainer: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Option: styled.input`
    display: none;
    &:checked + label {
      background-color: #0075ff;
      color: white;
    }
  `,
  Label: styled.label`
    cursor: pointer;
    font-size: 14px;
    padding: 4px 16px;
    border-radius: 16px;
    border: 1px solid #0075ff;
    color: #0075ff;
    margin-right: 16px;
  `,
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
    font-weight: 600;
    padding: 8px 22px;
    white-space: nowrap;
    border-radius: 10px;
    cursor: pointer;
  `,
};

export default styles;
