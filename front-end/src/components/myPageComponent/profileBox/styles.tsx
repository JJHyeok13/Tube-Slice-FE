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
};

export default styles;
