import styled from 'styled-components';

import { PiXBold } from 'react-icons/pi';

const styles = {
  Modal: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 350px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid gray;
    border-radius: 12px;
    background-color: #ffffff;
    z-index: 1002;
  `,
  ExitButton: styled(PiXBold)`
    cursor: pointer;
    position: fixed;
    top: 0;
    right: 0;
  `,
  TimeContainer: styled.div`
    padding: 24px;
  `,
  TimeSelectContainer: styled.div`
    width: 80%;
    display: flex;
  `,
  DescriptionContainer: styled.div`
    padding: 24px;
    width: 80%;
  `,
  DescriptionInput: styled.input`
    width: 100%;
    padding: 6px 10px;
    border-radius: 10px;
  `,
};

export default styles;
