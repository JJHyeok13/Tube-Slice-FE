import React, { useState } from 'react';

import RecommendVideo from '@components/commonComponent/recommendVideo/recommendVideo';

import styles from './styles';
import ProgressBar from '@components/mainPageComponent/progressBar/progressBar';

const MainPage: React.FC = () => {
  const [isProgressing, setIsProgressing] = useState(false);
  const [selectedOption, setSelectedOption] = useState('convert');

  const handleStart = () => {
    setIsProgressing(!isProgressing);
  };

  const handleOptionChange = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const options = [
    {
      id: 'convert',
      value: '변환',
      description: '스크립트를 생성할 영상 링크를 넣어주세요...',
    },
    {
      id: 'summarize',
      value: '요약',
      description: '요약할 영상의 링크를 넣어주세요...',
    },
  ];

  const selectedDescription =
    options.find((option) => option.id === selectedOption)?.description || '';

  return (
    <styles.Container>
      <styles.OptionContainer>
        {options.map((option) => (
          <div key={option.id}>
            <styles.Option
              type="radio"
              id={option.id}
              name="option"
              checked={selectedOption === option.id}
              onChange={() => handleOptionChange(option.id)}
            />
            <styles.Label htmlFor={option.id}>
              <span>{option.value}</span>
            </styles.Label>
          </div>
        ))}
      </styles.OptionContainer>

      <h2>{selectedDescription}</h2>

      <styles.InputWrapper>
        <styles.AddressInput type="url" placeholder="https://www.youtube.com" />
        <styles.Button onClick={handleStart}>시작하기</styles.Button>
      </styles.InputWrapper>

      {isProgressing && <ProgressBar />}

      <RecommendVideo />
    </styles.Container>
  );
};

export default MainPage;
