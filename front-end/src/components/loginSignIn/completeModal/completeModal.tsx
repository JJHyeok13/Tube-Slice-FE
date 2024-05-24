import React from 'react';

import { useRecoilValue } from 'recoil';
import { completeModalState } from 'recoil/recoil';

import styles from './styles';

const CompleteModal: React.FC = () => {
  const isCompleteModalOpen = useRecoilValue(completeModalState);

  return (
    isCompleteModalOpen && (
      <styles.Modal>
        <styles.ExitButton size={28} />

        <styles.UpperWrapper>
          <styles.TubeSlice>Tube Slice</styles.TubeSlice>

          <div>
            <styles.Greeting>
              <span>반가워요! 정진혁 님</span>
              <span>어쩌구 저쩌구</span>
            </styles.Greeting>
            <styles.Question>바로 프로필을 설정하시겠어요?</styles.Question>
          </div>
        </styles.UpperWrapper>

        <styles.ButtonWrapper>
          <styles.YesButton>좋아요!</styles.YesButton>
          <styles.NoButton>다음에 할게요.</styles.NoButton>
        </styles.ButtonWrapper>
      </styles.Modal>
    )
  );
};

export default CompleteModal;
