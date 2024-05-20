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
    padding-left: 4px;
    padding-bottom: 4px;
    font-size: 18px;
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
    padding-left: 8px;
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 500;
  `,
};

export default styles;
