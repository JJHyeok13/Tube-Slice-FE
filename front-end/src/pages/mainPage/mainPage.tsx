import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ConvertVideo, SummarizeVideo } from '@server/api/text/text';

import {
  ConvertResultProps,
  SubtitlesProps,
} from 'types/convertResultPage/convertResultPage';
import { SummarizeResultProps } from 'types/summarizeResultPage/summarizeResultPage';

import RecommendVideo from '@components/commonComponent/recommendVideo/recommendVideo';

import styles from './styles';
import { getScriptSubtitles } from '@server/api/script/script';

import { HashLoader } from 'react-spinners';

const MainPage: React.FC = () => {
  const navigate = useNavigate();

  // 진행 상황 확인을 위한 state 정의
  const [isProgressing, setIsProgressing] = useState<boolean>(false);
  const [isComplete, setIsComplete] = useState<boolean>(false);

  // 변환/요약을 진행하기 위한 옵션 state 정의
  const [selectedOption, setSelectedOption] = useState<string>('convert');
  const [selectedRow, setSelectedRow] = useState<number>(3);
  const [youtubeUrl, setYoutubeUrl] = useState<string>('');

  // 변환하기 결과 state 정의
  const [convertResult, setConvertResult] = useState<ConvertResultProps | null>(
    null,
  );

  // 변환하기 소제목 state 정의
  const [subtitles, setSubtitles] = useState<SubtitlesProps | null>(null);

  // 요약하기 결과 state 정의
  const [summarizeResult, setSummarizeResult] =
    useState<SummarizeResultProps | null>(null);

  // 변환/요약 옵션 선택 함수
  const handleOptionChange = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleStart = (youtubeUrl: string) => {
    if (youtubeUrl.trim() === '') {
      alert('유튜브 주소를 입력해주세요.');
      return;
    }
    setIsProgressing(true);
    setIsComplete(false);
    if (selectedOption === 'convert') {
      handleConvertVideo(youtubeUrl);
    } else if (selectedOption === 'summarize') {
      handleSummarize(selectedRow, youtubeUrl);
    }
  };

  const handleSubtitles = async (youtubeUrl: string) => {
    const res = await getScriptSubtitles(youtubeUrl);
    setSubtitles(res);
  };

  const handleConvert = async (youtubeUrl: string) => {
    const res = await ConvertVideo(youtubeUrl);
    setConvertResult(res);
  };

  // 변환하기 실행 API 호출 함수
  const handleConvertVideo = async (youtubeUrl: string) => {
    await handleConvert(youtubeUrl);
    await handleSubtitles(youtubeUrl);
    setIsComplete(true);
    setIsProgressing(false);
  };

  // 요약하기 실행 API 호출 함수
  const handleSummarize = async (row: number, youtubeUrl: string) => {
    const res = await SummarizeVideo(row, youtubeUrl);
    setSummarizeResult(res);
    setIsComplete(true);
    setIsProgressing(false);
  };

  // 선택된 옵션과 결과에 따른 결과 페이지 이동 함수
  const handleCheckResult = (selectedOption: string, youtubeUrl: string) => {
    if (selectedOption === 'convert') {
      navigate(`/convertresult?youtubeUrl=${youtubeUrl}`, {
        state: { convertResult, subtitles },
      });
    } else if (selectedOption === 'summarize') {
      navigate(`/summarizeresult?youtubeUrl=${youtubeUrl}`, {
        state: summarizeResult,
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
    <>
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

        <styles.RowDescriptionWrapper>
          <h2>{selectedDescription}</h2>
          {selectedOption === 'summarize' && (
            <styles.RowWrapper>
              <div>요약할 문장의 수 :</div>
              <select
                value={selectedRow}
                onChange={(e) => setSelectedRow(Number(e.target.value))}
              >
                {[...Array(8).keys()].map((i) => (
                  <option key={i} value={i + 3}>
                    {i + 3}
                  </option>
                ))}
              </select>
            </styles.RowWrapper>
          )}
        </styles.RowDescriptionWrapper>

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
              onClick={() => handleStart(youtubeUrl)}
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

      {isProgressing && (
        <styles.ModalBackdrop>
          <HashLoader size={120} color="#0075ff" loading={isProgressing} />
        </styles.ModalBackdrop>
      )}
    </>
  );
};

export default MainPage;
