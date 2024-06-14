import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  SummarizeContainer: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 24px;
    background-color: #efefef;
    border-radius: 12px;

    > * {
      margin-bottom: 4px;
    }
    margin-bottom: 40px;
  `,
  Title: styled.h2``,
  Summarize: styled.div`
    padding: 8px;
  `,
};

export default styles;
