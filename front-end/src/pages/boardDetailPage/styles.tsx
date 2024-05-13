import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 90%;
    margin: 120px auto 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  LeftComponent: styled.div`
    width: 5%;
  `,
  CenterComponent: styled.div`
    width: 60%;
  `,
  RightComponent: styled.div`
    width: 30%;
  `,
};

export default styles;
