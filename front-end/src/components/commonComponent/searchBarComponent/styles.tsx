import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,

  InputBar: styled.input`
    background-color: #dadada;
    border: 0;
    width: 400px;
    height: 50px;
    border-radius: 50px;
    padding: 0 20px;

    &::placeholder {
      color: black;
    }
  `,
};

export default styles;
