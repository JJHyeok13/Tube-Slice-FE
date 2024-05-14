import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  CommentCount: styled.span`
    color: #0075ff;
  `,
  LowerWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `,
  Textarea: styled.textarea`
    width: 100%;
    min-height: 80px;
    border: 1px solid #0075ff;
    border-radius: 4px;
    resize: none;
    box-sizing: border-box;
    padding: 10px;
  `,
  Button: styled.div`
    background-color: #0075ff;
    color: white;
    border-radius: 4px;
    padding: 4px 10px;
    cursor: pointer;
  `,
};

export default styles;
