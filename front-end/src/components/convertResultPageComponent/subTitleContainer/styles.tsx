import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
  `,
  SubtitleNumber: styled.span`
    font-size: 20px;
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
    padding-bottom: 28px;
  `,
};

export default styles;
