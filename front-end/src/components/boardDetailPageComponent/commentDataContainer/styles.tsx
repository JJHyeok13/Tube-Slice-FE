import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Comment: styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 40px;
  `,
  UpperWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
  ProfileImage: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  `,
  WriterInfo: styled.div`
    display: flex;
    font-size: 14px;
    align-items: center;
    margin-bottom: 10px;
  `,
  NicknameTime: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Nickname: styled.div`
    font-weight: 600;
    cursor: pointer;
  `,
  CreatedAt: styled.div`
    font-weight: 500;
    color: #8a8b8e;
  `,
  OptionContainer: styled.div`
    display: flex;
    align-items: center;
    color: #8a8b8e;
  `,
  Option: styled.div`
    padding: 0 8px;
    cursor: pointer;
    max-height: fit-content;
  `,
};

export default styles;
