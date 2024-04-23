import React from 'react';

import GuideComponent from '@components/mainPageComponent/Guide/Guide';

import styles from './styles';

import Example1Image from '@assets/mainPage/example1.svg';
import Example2Image from '@assets/mainPage/example2.svg';
import Example3Image from '@assets/mainPage/example3.svg';

const MainPage: React.FC = () => {
  return (
    <styles.Container>
      <styles.MainText>
        <div>어서오세요</div>
        <div>원하시는 영상을 </div>
        <div>빠르고 정확하게 요약해드려요..🔥</div>
      </styles.MainText>

      <styles.GuideContainer>
        <GuideComponent
          src={Example1Image}
          address="convert"
          description="영상의 스크립트를 만들어봐요!"
          hoverdDescription="스크립트 만들러 가기!!!"
        />
        <GuideComponent
          src={Example2Image}
          address="summarize"
          description="영상을 세줄로 요약해봐요!"
          hoverdDescription="세줄 요약 하러 가기!!!"
        />
        <GuideComponent
          address="myscript"
          src={Example3Image}
          description="나만의 스크립트를 만들어봐요!"
          hoverdDescription="저장한 스크립트 보러 가기!!!"
        />
        <GuideComponent
          address="board"
          src={Example1Image}
          description="나의 생각을 공유 해봐요!"
          hoverdDescription="생각 공유하러 가기!!!"
        />
      </styles.GuideContainer>
    </styles.Container>
  );
};

export default MainPage;
