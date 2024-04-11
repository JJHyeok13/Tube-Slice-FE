import styled from 'styled-components';

const styles = {
  GuideContainer: styled.div`
    width: 25%;
  `,
  GuideImage: styled.img`
    width: 100%;
    margin-bottom: 30px;
  `,
  GuideDescription: styled.div`
    width: 100%;
    text-align: center;
    background-color: #e3e3e3;
    padding: 14px 24px;
    box-sizing: border-box;
    border-radius: 47px;
    font-weight: 600;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover {
      background-color: #0075ff;
      color: white;
    }
  `,
};

export default styles;
