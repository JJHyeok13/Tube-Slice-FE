import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
  `,
  Follow: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e3e3e3;

    &:last-child {
      border: 0;
      padding-bottom: 0;
    }
  `,
  ProfileInfo: styled.div`
    display: flex;
    align-items: center;
  `,
  Nickname: styled.div`
    max-width: fit-content;
    font-weight: 600;
    cursor: pointer;
  `,
  Introduction: styled.div`
    font-weight: 500;
  `,
  ProfileImage: styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
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
};

export default styles;
