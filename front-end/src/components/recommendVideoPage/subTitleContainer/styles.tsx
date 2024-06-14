import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  SubtitleNumber: styled.span`
    font-size: 18px;
    color: #e4e4e4;
    background-color: #272727;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  `,
  SubtitleList: styled.div`
    display: flex;
    flex-direction: column;

    // 너무 길면 ... 으로 뒷부분 생략
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  Subtitle: styled.div`
    padding-bottom: 16px;
  `,
  SeeMoreButton: styled.div`
    width: fit-content;
    font-size: 14px;
    color: #9f9f9f;
    cursor: pointer;
  `,
};

export default styles;
