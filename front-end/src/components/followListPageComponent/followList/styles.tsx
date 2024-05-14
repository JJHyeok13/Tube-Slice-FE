import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
  `,
  Follow: styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 48px;
    padding-bottom: 48px;
    border-bottom: 1px solid #e3e3e3;

    &:last-child {
      border: 0;
      padding-bottom: 0;
    }
  `,
};

export default styles;
