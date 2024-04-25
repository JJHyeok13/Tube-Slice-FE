import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 100%;
    background-color: #efefef;
    border-radius: 12px;
    box-sizing: border-box;
    padding: 30px 20px;
  `,
  Title: styled.div`
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    border-bottom: 1px solid black;
  `,
  KeywordContainer: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 12px;
  `,
  Keyword: styled.div`
    margin-bottom: 15px;
    font-size: 12px;
    font-weight: 600;
  `,
};

export default styles;
