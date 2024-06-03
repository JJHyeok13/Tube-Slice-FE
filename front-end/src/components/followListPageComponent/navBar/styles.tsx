import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
  `,
  Nav: styled.div<{ $isActive: boolean }>`
    cursor: pointer;
    color: ${({ $isActive }) => ($isActive ? '#0075ff' : '#000000')};
    font-size: 20px;
    font-weight: ${({ $isActive }) => ($isActive ? 600 : 500)};
    margin-right: 16px;
    border-bottom: ${({ $isActive }) =>
      $isActive ? '2px solid #0075ff' : '0'};
  `,
};

export default styles;
