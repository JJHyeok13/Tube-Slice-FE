import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 90%;
    height: 100vh;
    margin: 160px auto 0;
    display: flex;
    justify-content: space-between;
    padding-bottom: 70px;
  `,
  LeftContainer: styled.div`
    display: flex;
    width: 45%;
    height: 75%;
  `,
  ResultContainer: styled.div`
    width: 50%;
    height: 75%;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};

export default styles;
