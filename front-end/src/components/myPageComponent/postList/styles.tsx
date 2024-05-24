import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
  `,
  Mypost: styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 48px;
    padding-bottom: 48px;
    border-bottom: 1px solid #e3e3e3;

    &:last-child {
      border: 0;
      padding-bottom: 0;
    }
  `,
  ThumbnailImage: styled.img`
    width: 290px;
    height: 180px;
    margin-left: 20px;
    border-radius: 12px;
    cursor: pointer;
  `,
  PostInfo: styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    padding: 12px 24px;
    border-radius: 12px;
  `,
  Title: styled.div`
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 2px;
    max-width: fit-content;
    cursor: pointer;
  `,
  Content: styled.div`
    color: #5d5d5d;
  `,
  KeywordWrapper: styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  `,
  Keyword: styled.div`
    background-color: #ffffff;
    color: #0075ff;
    border: 1px solid #0075ff;
    padding: 2px 12px;
    border-radius: 16px;
    margin-right: 10px;
  `,
  DateCommentLike: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  `,
  LeftInfo: styled.div`
    display: flex;
    align-items: center;
  `,
  RightInfo: styled.div`
    display: flex;
  `,
  DCLContainer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 14px;
  `,
  Icon: styled.img`
    margin-right: 6px;
  `,
};

export default styles;
