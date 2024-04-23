import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 78%;
    margin: 170px auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 70px;
  `,
  MainText: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    font-weight: 600;
    font-size: 20px;
  `,
  GuideContainer: styled.div`
    padding-bottom: 70px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);

    gap: 50px;

    @media screen and (max-width: 1400px) and (min-width: 1281px) {
      font-size: 14px;
    }

    @media screen and (max-width: 1280px) and (min-width: 1151px) {
      font-size: 12px;
    }

    @media screen and (max-width: 1150px) and (min-width: 1025px) {
      font-size: 10px;
    }

    @media screen and (max-width: 1024px) and (min-width: 501px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 50px;
      grid-row-gap: 50px;
      font-size: 14px;
    }

    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 100px;
      grid-row-gap: 50px;
    }
  `,
};

export default styles;
