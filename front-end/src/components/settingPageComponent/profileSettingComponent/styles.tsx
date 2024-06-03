import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
  `,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    background-color: #efefef;
    border-radius: 16px;
    padding: 24px 32px;

    margin-bottom: 16px;
  `,

  InputContainer: styled.div`
    display: flex;
    flex-direction: column;
  `,

  Title: styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  `,

  ImageContainer: styled.div`
    position: relative;
  `,

  ProfileImage: styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
  `,

  ImageChangeButton: styled.img`
    width: 50px;
    height: 50px;

    cursor: pointer;

    position: absolute;
    bottom: 16px;
    left: 150px;
  `,

  TextInput: styled.input`
    padding: 8px 12px;
  `,

  DeleteButton: styled.div`
    max-width: fit-content;
    margin-left: auto;

    font-weight: 600;
    padding: 8px 20px;
    background-color: #0075ff;
    color: #ffffff;
    border-radius: 8px;
    cursor: pointer;
  `,
};

export default styles;
