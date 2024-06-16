import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  MyScript: styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 40px;
    border-bottom: 1px solid #e3e3e3;
    margin-bottom: 40px;

    &:last-child {
      border: 0;
      padding-bottom: 0;
    }
  `,
  ThumbnailImage: styled.img`
    width: 444.44px;
    height: 250px;
    margin-right: 70px;
    border-radius: 12px;
    cursor: pointer;
  `,
  ScriptInfo: styled.div`
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    padding: 24px;
    border-radius: 12px;
  `,
  Title: styled.div`
    max-width: fit-content;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 8px;
    cursor: pointer;
  `,
  Content: styled.div`
    color: #5d5d5d;
    margin-bottom: 29px;
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
    border: 1px solid #0075ff;
    margin-right: 12px;
    font-weight: 600;
  `,
};

export default styles;
