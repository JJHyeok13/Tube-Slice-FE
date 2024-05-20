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
  FollowFollowerContainer: styled.div`
    display: flex;
    flex-direction: row;
    color: #848484;
    font-size: 12px;
    margin-top: 15px;
  `,
};

export default styles;
