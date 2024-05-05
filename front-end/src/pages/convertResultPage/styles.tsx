import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 90%;
    height: 100%;
    margin: 120px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 170px;
  `,
  LeftWrapper: styled.div`
    width: 50%;
    height: calc(100% - 70px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 60px;
    border-right: 1px solid black;
    overflow-y: scroll;
  `,
  RightWrapper: styled.div`
    width: 45%;
    height: calc(100%);
    overflow-y: scroll;
  `,
};

export default styles;
