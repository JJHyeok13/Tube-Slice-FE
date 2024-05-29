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

  Title: styled.div`
    color: #e02626;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 8px;
  `,

  DeleteButton: styled.div`
    max-width: fit-content;
    margin-left: auto;

    font-weight: 600;
    padding: 8px 20px;
    background-color: #e02626;
    color: #ffffff;
    border-radius: 8px;
    cursor: pointer;
  `,
};

export default styles;
