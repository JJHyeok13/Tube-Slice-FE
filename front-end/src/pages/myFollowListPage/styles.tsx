import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 90%;
    margin: 120px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 70px;
  `,
  LeftContainer: styled.div`
    width: 15%;
    display: flex;
    flex-direction: column;
    position: fixed;
  `,
  RightContainer: styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 20%;
  `,
};

export default styles;
