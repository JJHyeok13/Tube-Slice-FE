import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ProgressBar: styled.div`
    background-color: #efefef;
    height: 15px;
    border-radius: 100px;
  `,
  Progress: styled.div<{ width: number }>`
    width: ${({ width }) => `${width}%`};
    height: 15px;
    background: linear-gradient(to right, #91c6ff, #0075ff);
    border-radius: 100px;
    transition: width 0.5s ease-in-out;
  `,
  Percentage: styled.div`
    margin-left: auto;
    margin-top: 10px;
  `,
};

export default styles;
