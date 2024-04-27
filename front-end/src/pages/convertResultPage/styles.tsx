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
  LeftWrapper: styled.div`
    width: 50%;
    height: calc(100% - 170px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 60px;
    border-right: 1px solid black;
    overflow-y: auto;
  `,
  RightWrapper: styled.div`
    width: 45%;
    height: calc(100% - 170px);
    overflow-y: auto;
  `,
};

export default styles;
