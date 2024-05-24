import styled from 'styled-components';

import { FaCirclePlus } from 'react-icons/fa6';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  TitleInput: styled.input`
    height: 70px;
    font-size: 32px;
    font-weight: 600;
    border: 0;
    margin-bottom: 20px;
  `,
  VideoInputContainer: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  VideoUrlInput: styled.input`
    width: 95%;
    height: 50px;
    font-size: 24px;
    font-weight: 600;
    border: 0;
    margin-bottom: 20px;
  `,
  TimelineCreateButton: styled(FaCirclePlus)`
    margin-bottom: 20px;
    cursor: pointer;
  `,
  KeywordContainer: styled.div`
    display: flex;
    margin-bottom: 20px;
    position: relative;
  `,
  Keyword: styled.span`
    display: inline-block;
    background-color: #ffffff;
    color: #0075ff;
    border: 1px solid #0075ff;
    border-radius: 16px;
    padding: 2px 14px;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
  `,
  KeywordInput: styled.input`
    height: 30px;
    font-size: 16px;
    font-weight: 600;
    border: 0;
  `,
  Modal: styled.div<{ isVisible: boolean }>`
    position: absolute;
    background-color: #535458;
    color: #ffffff;
    padding: 10px;
    font-size: 12px;
    z-index: 1000;
    top: 40px;

    max-height: ${({ isVisible }) => (isVisible ? '200px' : '0')};
    overflow: hidden;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  `,
  ContentInput: styled.textarea`
    height: 300px;
    font-size: 30px;
    font-weight: 600;
    border: 0;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    resize: none;
  `,
  ButtonContainer: styled.div`
    display: flex;
    margin-left: auto;
  `,
  CancelButton: styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 6px;
    padding: 4px 24px;
  `,
  PostButton: styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: #0075ff;
    color: #ffffff;
    border-radius: 6px;
    padding: 4px 24px;
    margin-left: 24px;
  `,
};

export default styles;
