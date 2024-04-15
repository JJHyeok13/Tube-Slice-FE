import styled from 'styled-components';

const styles = {
  Container: styled.div`
    width: 80%;
    margin: 170px auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 170px;
  `,
  MainText: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
    font-weight: 600;
    font-size: 20px;
  `,
  GuideContainer: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);

    gap: 50px;

    @media screen and (max-width: 1439px) and (min-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 200px;
      grid-row-gap: 50px;
    }

    @media screen and (max-width: 1023px) {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 100px;
      grid-row-gap: 50px;
    }
  `,
};

export default styles;
