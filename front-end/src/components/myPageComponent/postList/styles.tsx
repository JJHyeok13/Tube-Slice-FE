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
  `,
  ThumbnailImage: styled.img`
    width: 290px;
    height: 180px;
    margin-left: 20px;
    border-radius: 12px;
    cursor: pointer;
  `,
  PostInfo: styled.div`
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
    padding: 6px 18px;
    border-radius: 136px;
    margin-right: 12px;
  `,
  DateCommentLike: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;
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
