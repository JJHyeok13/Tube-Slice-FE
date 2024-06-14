import styled from 'styled-components';

interface ButtonProps {
  $isProgressing?: boolean;
  $isComplete?: boolean;
}

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
    font-size: 16px;
    font-weight: 600;
    padding: 4px 16px;
    border-radius: 16px;
    border: 1px solid #0075ff;
    color: #0075ff;
    margin-right: 16px;
  `,
  RowDescriptionWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  RowWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
  Button: styled.div<ButtonProps>`
    background-color: ${({ $isComplete }) =>
      $isComplete ? '#0075ff' : '#ffffff'};
    color: ${({ $isComplete }) => ($isComplete ? '#ffffff' : '#0075ff')};

    font-weight: 600;
    padding: 8px 22px;
    white-space: nowrap;
    border-radius: 10px;

    cursor: ${({ $isProgressing }) =>
      $isProgressing ? 'not-allowed' : 'pointer'};
  `,
  ModalBackdrop: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 999;
  `,
};

export default styles;
