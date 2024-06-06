import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  SubtitleWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;
  `,
  SubtitleText: styled.div`
    font-size: 22px;
    font-weight: 600;
    color: #4a4a4a;
  `,
  ScriptWrapper: styled.div`
    background-color: #f3f3f3;
    border-radius: 12px;
    padding: 12px 16px;
    margin-bottom: 48px;
  `,
};

export default styles;
