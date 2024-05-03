import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `,
  OptionContainer: styled.div`
    display: flex;
    flex-direction: row;
  `,
  SearchBarContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #dadada;
    padding: 0 10px 0 20px;
    border-radius: 50px;
    width: 60%;
  `,
  InputBar: styled.input`
    background-color: #dadada;
    border: 0;
    width: 400px;
    height: 50px;
    border-radius: 50px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: black;
    }
  `,
  Image: styled.img`
    cursor: pointer;
  `,
};

export default styles;
