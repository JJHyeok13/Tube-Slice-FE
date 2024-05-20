import styled from 'styled-components';

const styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  VideoWrapper: styled.div`
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    overflow-x: auto;
  `,
  Header: styled.h2`
    color: #4e4e4e;
  `,
  Nickname: styled.span`
    color: #0075ff;
  `,
  Recommend: styled.div`
    width: 350px;
    height: 240px;
    margin-right: 48px;
  `,
  Thumbnail: styled.img`
    width: 350px;
    height: 210px;
    border-radius: 10px;
    cursor: pointer;
  `,
  VideoInfo: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  ViewCountWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,
};

export default styles;
