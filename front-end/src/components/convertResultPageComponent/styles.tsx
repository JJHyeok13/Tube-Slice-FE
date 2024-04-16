import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
  `,
  SubtitleList: styled.div`
    display: flex;
    flex-direction: column;

    // 너무 길면 ... 으로 뒷부분 생략
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
};

export default styles;
