import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  FirstWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Title: styled.div`
    font-size: 50px;
    font-weight: 700;
  `,
  Nickname: styled.div`
    display: flex;
    align-items: center;
  `,
  FollowButton: styled.div`
    display: flex;
    background-color: #0075ff;
    color: #ffffff;
    padding: 2px 12px;
    border-radius: 10px;
  `,
  UnfollowButton: styled.div`
    display: flex;
    background-color: #ffffff;
    color: #0075ff;
    padding: 2px 12px;
    border: 1px solid #0075ff;
    border-radius: 10px;
  `,
  PostOption: styled.div`
    display: flex;
    color: #8a8b8e;
  `,
  PostInfo: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  KeywordWrapper: styled.div`
    display: flex;
  `,
  Keyword: styled.div`
    background-color: #ffffff;
    border: 1px solid #0075ff;
    color: #0075ff;
    padding: 6px 18px;
    border-radius: 136px;
    margin-right: 12px;
  `,
};

export default styles;
