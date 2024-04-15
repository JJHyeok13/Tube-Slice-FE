import styled from 'styled-components';

const styles = {
  GuideContainer: styled.div``,
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
    font-size: 1em;
    box-shadow: 4px 4px 12px rgba(79, 79, 79, 0.25);

    &:hover {
      background-color: #0075ff;
      color: white;
    }
  `,
};

export default styles;
