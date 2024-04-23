import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  MyScript: styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 48px;
  `,
  ThumbnailImage: styled.img`
    width: 290px;
    height: 180px;
    margin-right: 20px;
    border-radius: 12px;
    cursor: pointer;
  `,
  ScriptInfo: styled.div`
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    padding: 12px 24px;
    border-radius: 12px;
  `,
  Title: styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 2px;
  `,

  Content: styled.div`
    color: #5d5d5d;
    margin-bottom: 14px;
  `,
  KeywordWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Keyword: styled.div`
    background-color: #ffffff;
    color: #0075ff;
    padding: 6px 18px;
    border-radius: 136px;
    margin-right: 12px;
  `,
};

export default styles;
