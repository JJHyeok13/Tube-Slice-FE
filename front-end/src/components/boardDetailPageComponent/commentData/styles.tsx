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
    width: 40px;
    height: 40px;
    border-radius: 50%;
  `,
  WriterInfo: styled.div`
    display: flex;
  `,
  NicknameTime: styled.div`
    display: flex;
    flex-direction: column;
  `,
  CommentOption: styled.div`
    display: flex;
  `,
};

export default styles;
