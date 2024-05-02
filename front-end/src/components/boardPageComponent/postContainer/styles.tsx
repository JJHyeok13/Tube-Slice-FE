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
    cursor: pointer;

    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-6px);
    }
  `,
  Text: styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
  `,
  Title: styled.div`
    display: flex;
    font-weight: 700;
    padding-bottom: 10px;
  `,
  Content: styled.div`
    display: flex;
    padding-bottom: 30px;
  `,
  PostInfo: styled.div`
    font-size: 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
  `,
  Writer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  `,
  ProfileImage: styled.img`
    width: 30px;
    height: 30px;
    padding-left: 10px;
  `,
};

export default styles;
