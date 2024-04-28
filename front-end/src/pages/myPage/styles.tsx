import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 88%;
    margin: 0 auto;
    margin-top: 170px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 70px;
  `,
  LeftContainer: styled.div`
    position: fixed;
    width: 180px;
    display: flex;
    flex-direction: column;
  `,
  RightContainer: styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: 15%;
  `,
};

export default styles;
