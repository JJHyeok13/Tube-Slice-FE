import styled from 'styled-components';

interface InputBarProps {
  show: boolean;
}

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Image: styled.img`
    cursor: pointer;
  `,
  InputBar: styled.input<InputBarProps>`
    background-color: #dadada;
    border: 0;
    width: ${(props) => (props.show ? '400px' : '0')};
    height: 50px;
    border-radius: 50px;
    padding: 0 20px;
    transition: width 0.5s ease;
    transition-delay: ${(props) => (props.show ? '0.3s' : '0')};

    &::placeholder {
      color: black;
    }
  `,
};

export default styles;
