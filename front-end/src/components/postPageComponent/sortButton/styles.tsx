import styled from 'styled-components';

interface ElementProps {
  $isActive: boolean;
}

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Element: styled.div<ElementProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${(props) => (props.$isActive ? '#0075FF' : '#777777')};
    border-bottom: ${(props) =>
      props.$isActive ? '3px solid #0075FF' : 'none'};
    margin-right: 16px;
    padding-bottom: 8px;
    cursor: pointer;
  `,
  Text: styled.div`
    display: flex;
    font-weight: 600;
    margin-left: 8px;
  `,
};

export default styles;
