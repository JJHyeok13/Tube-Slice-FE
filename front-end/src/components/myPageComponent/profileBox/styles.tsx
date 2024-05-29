import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 100%;
    background-color: #efefef;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    box-sizing: border-box;
  `,
  ProfileImage: styled.img`
    width: 90%;
    height: auto;
    border-radius: 100%;
    margin-bottom: 30px;
  `,
  NicknameFollowContainer: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  Nickname: styled.div`
    font-size: 16px;
    font-weight: 600;
  `,
  Introduction: styled.div``,
  FollowContainer: styled.div`
    display: flex;
    flex-direction: row;
    color: #848484;
    font-size: 12px;
    margin-top: 15px;
  `,
  FollowData: styled.div`
    display: flex;
    font-size: 14px;
    margin-right: 20px;
    cursor: pointer;
  `,
  FollowButton: styled.div`
    display: flex;
    background-color: #0075ff;
    color: #ffffff;
    padding: 2px 12px;
    border-radius: 10px;
    cursor: pointer;
  `,
  UnfollowButton: styled.div`
    display: flex;
    background-color: #ffffff;
    color: #0075ff;
    padding: 2px 12px;
    border: 1px solid #0075ff;
    border-radius: 10px;
    cursor: pointer;
  `,
};

export default styles;
