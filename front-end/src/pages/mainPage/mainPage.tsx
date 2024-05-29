import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import RecommendVideo from '@components/commonComponent/recommendVideo/recommendVideo';

import styles from './styles';
import { SummarizeVideo } from '@server/api/text/text';
import { SummarizeResultProps } from 'types/summarizeResultPage/summarizeResultPage';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  const [isProgressing, setIsProgressing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>('convert');

  const row = '3';
  const [youtubeUrl, setYoutubeUrl] = useState<string>('');

  const [summarizeResult, setSummarizeResult] = useState<
    SummarizeResultProps['summarizeResultData']
  >([]);

  const handleOptionChange = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleSummarize = (youtubeUrl: string) => {
    setIsProgressing(true);
    SummarizeVideo(row, youtubeUrl).then((res) =>
      setSummarizeResult(res.result),
    );
  };

  const handleCheckResult = (selectedOption: string, youtubeUrl: string) => {
    navigate(`/${selectedOption}result?youtubeUrl=${youtubeUrl}`, {
      state: {
        summarizeResult,
      },
    });
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
        <styles.AddressInput
          type="url"
          placeholder="https://www.youtube.com"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
        />
        {isProgressing ? (
          <styles.Button style={{ cursor: 'auto' }}>변환중</styles.Button>
        ) : (
          <styles.Button onClick={() => handleSummarize(youtubeUrl)}>
            시작하기
          </styles.Button>
        )}
        {isComplete && (
          <styles.Button
            onClick={() => handleCheckResult(selectedOption, youtubeUrl)}
          >
            확인하기
          </styles.Button>
        )}
      </styles.InputWrapper>

      <RecommendVideo />
    </styles.Container>
  );
};

export default MainPage;
