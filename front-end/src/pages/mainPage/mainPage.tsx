import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SummarizeVideo } from '@server/api/text/text';

import { ConvertResultProps } from 'types/convertResultPage/convertResultPage';
import { SummarizeResultProps } from 'types/summarizeResultPage/summarizeResultPage';

import RecommendVideo from '@components/commonComponent/recommendVideo/recommendVideo';

import styles from './styles';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  // 진행 상황 확인을 위한 state 정의
  const [isProgressing, setIsProgressing] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  // 변환/요약을 진행하기 위한 옵션 state 정의
  const [selectedOption, setSelectedOption] = useState<string>('convert');
  const row = '3';
  const [youtubeUrl, setYoutubeUrl] = useState<string>('');

  // 변환하기 결과 state 정의
  const [convertResult, setConvertResult] = useState<
    ConvertResultProps['result']
  >([]);

  // 요약하기 결과 state 정의
  const [summarizeResult, setSummarizeResult] = useState<
    SummarizeResultProps['result']
  >([]);

  // 변환/요약 옵션 선택 함수
  const handleOptionChange = (optionId: string) => {
    setSelectedOption(optionId);
  };

  // 요약하기 실행 API 호출 함수
  const handleSummarize = (youtubeUrl: string) => {
    if (youtubeUrl.trim() === '') {
      alert('유튜브 주소를 입력해주세요.');
      return;
    }
    setIsProgressing(true);
    SummarizeVideo(row, youtubeUrl)
      .then((res) => {
        setSummarizeResult(Array.isArray(res.result) ? res.result : []);
      })
      .finally(() => {
        setIsComplete(true);
        setIsProgressing(false);
      });
  };

  // 선택된 옵션과 결과에 따른 결과 페이지 이동 함수
  const handleCheckResult = (selectedOption: string, youtubeUrl: string) => {
    // 변환하기 결과 페이지 이동
    if (selectedOption === 'convert') {
      navigate(`/convertresult?youtubeUrl=${youtubeUrl}`, {
        state: {
          convertResult,
        },
      });
    }
    // 요약하기 결과 페이지 이동
    else if (selectedOption === 'summarize') {
      navigate(`/summarizeresult?youtubeUrl=${youtubeUrl}`, {
        state: {
          summarizeResult,
        },
      });
    }
  };

  // 변환/요약하기 옵션
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
          <React.Fragment key={option.id}>
            <styles.Option
              type="radio"
              id={option.id}
              name="option"
              checked={selectedOption === option.id}
              onChange={() => handleOptionChange(option.id)}
            />
            <styles.Label htmlFor={option.id}>{option.value}</styles.Label>
          </React.Fragment>
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

        {isProgressing && !isComplete && (
          <styles.Button $isProgressing={isProgressing}>변환중</styles.Button>
        )}
        {!isProgressing && !isComplete && (
          <styles.Button
            $isComplete={isComplete}
            onClick={() => handleSummarize(youtubeUrl)}
          >
            시작하기
          </styles.Button>
        )}
        {isComplete && (
          <styles.Button
            $isProgressing={isProgressing}
            $isComplete={isComplete}
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
