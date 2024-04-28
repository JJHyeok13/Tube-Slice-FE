import styled from 'styled-components';

interface ElementProps {
  isActive: boolean;
}

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Element: styled.div<ElementProps>`
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${(props) => (props.isActive ? '#0075FF' : '#777777')};
    border-bottom: ${(props) =>
      props.isActive ? '3px solid #0075FF' : 'none'};
    margin-right: 15px;
    cursor: pointer;
  `,
  Icon: styled.img`
    width: 24px;
    height: 24px;
  `,
  Text: styled.div`
    display: flex;
    font-weight: 600;
  `,
};

export default styles;
