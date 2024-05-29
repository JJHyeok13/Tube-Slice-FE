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
  SpinnerContainer: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  LeftComponent: styled.div`
    width: 5%;
  `,
  CenterComponent: styled.div`
    width: 60%;
  `,
  RightComponent: styled.div`
    width: 25%;
  `,
};

export default styles;
