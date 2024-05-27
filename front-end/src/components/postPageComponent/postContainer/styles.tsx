import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
    padding-bottom: 170px;
  `,
  Post: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 4px;
    background-color: #efefef;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);

    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-6px);
    }
  `,
  Writer: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: 600;
    padding: 12px 12px;
    cursor: pointer;
  `,
  ProfileImage: styled.img`
    width: 30px;
    height: 30px;
    margin-right: 10px;
    border-radius: 50%;
  `,
  Text: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    cursor: pointer;
  `,
  Title: styled.div`
    display: flex;
    font-weight: 700;
    padding-bottom: 10px;
  `,
  Content: styled.div`
    display: flex;
    height: 100px;
    padding-bottom: 30px;
  `,
  PostInfo: styled.div`
    font-size: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  LeftInfo: styled.div`
    display: flex;
    align-items: center;
  `,
  RightInfo: styled.div`
    display: flex;
  `,
};

export default styles;
