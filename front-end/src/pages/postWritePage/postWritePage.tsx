import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import { useRecoilValue } from 'recoil';
import { userInfo } from '@recoil/recoil';

import InputContainer from '@components/postWritePageComponent/inputContainer/inputContainer';

import styles from './styles';
import { createPost } from '@server/api/post/post';
import { useNavigate } from 'react-router-dom';

const PostWritePage: React.FC = () => {
  const userinfo = useRecoilValue(userInfo);
  const navigate = useNavigate();

  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [youtubeUrl, setYoutubeUrl] = useState<string>('');

  const [keywordInput, setKeywordInput] = useState<string>('');
  const [keywords, setKeywords] = useState<string[]>([]);

  const [timelineDtoList, setTimelineDtoList] = useState([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [endTime, setEndTime] = useState<number>(0);
  const [description, setDescription] = useState<string>('');

  const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleYoutubeUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(e.target.value);
  };

  const handleKeywordInput = (e: ChangeEvent<HTMLInputElement>) => {
    setKeywordInput(e.target.value);
  };

  const handleKeywordKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keywordInput.trim()) {
      setKeywords([...keywords, keywordInput.trim()]);
      setKeywordInput('');
      e.preventDefault();
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setKeywords(keywords.filter((keyword) => keyword !== keywordToRemove));
  };

  const handleStartTime = (hours: number, minute: number, second: number) => {
    setStartTime(hours * 3600 + minute * 60 + second);
  };

  const handleEndTime = (hours: number, minute: number, second: number) => {
    setEndTime(hours * 3600 + minute * 60 + second);
  };

  const handleTimeline = () => {
    setTimelineDtoList([
      ...timelineDtoList,
      { startTime: startTime, endTime: endTime, description: description },
    ]);
  };

  const handleSubmit = async () => {
    const data = {
      title: title,
      youtubeUrl: youtubeUrl,
      timelineDtoList: timelineDtoList,
      postKeywords: keywords,
      content: content,
    };

    await createPost(data);
    navigate(`/mypage/${userinfo.userId}`);
  };

  return (
    <styles.Container>
      <InputContainer
        title={title}
        handleTitle={handleTitle}
        youtubeUrl={youtubeUrl}
        handleYoutubeUrl={handleYoutubeUrl}
        keywordInput={keywordInput}
        handleKeywordInput={handleKeywordInput}
        handleKeywordKeyPress={handleKeywordKeyPress}
        removeKeyword={removeKeyword}
        keywords={keywords}
        content={content}
        handleContent={handleContent}
        handleStartTime={handleStartTime}
        handleEndTime={handleEndTime}
        handleSubmit={handleSubmit}
      />
    </styles.Container>
  );
};

export default PostWritePage;
