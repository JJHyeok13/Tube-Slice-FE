import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Title: styled.div`
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
  `,
  PostInfo: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  `,
  FirstWrapper: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  `,
  WriterInfo: styled.div`
    display: flex;
    align-items: center;
  `,
  Nickname: styled.div`
    margin-right: 10px;
    cursor: pointer;
  `,
  FollowButton: styled.div`
    display: flex;
    font-size: 12px;
    background-color: #0075ff;
    color: #ffffff;
    padding: 2px 12px;
    border-radius: 10px;
    cursor: pointer;
  `,
  UnfollowButton: styled.div`
    display: flex;
    font-size: 12px;
    background-color: #ffffff;
    color: #0075ff;
    padding: 2px 12px;
    border: 1px solid #0075ff;
    border-radius: 10px;
    cursor: pointer;
  `,
  OptionContainer: styled.div`
    display: flex;
    color: #8a8b8e;
  `,
  Option: styled.div`
    padding: 0 8px;
    cursor: pointer;
  `,
  SecondWrapper: styled.div`
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
    padding: 2px 12px;
    border-radius: 10px;
    margin-right: 12px;
  `,
  Content: styled.div`
    margin-bottom: 40px;
  `,
};

export default styles;
