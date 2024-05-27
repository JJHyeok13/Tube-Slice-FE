import InputContainer from '@components/postWritePageComponent/inputContainer/inputContainer';
import React, { useState } from 'react';

import styles from './styles';

const PostWritePage: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [timelines, setTimelines] = useState({});
  const [keywordInput, setKeywordInput] = useState<string>('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [content, setContent] = useState<string>('');

  return (
    <styles.Container>
      <InputContainer
        title={title}
        setTitle={setTitle}
        videoUrl={videoUrl}
        setVideoUrl={setVideoUrl}
        keywordInput={keywordInput}
        setKeywordInput={setKeywordInput}
        keywords={keywords}
        setKeywords={setKeywords}
        content={content}
        setContent={setContent}
      />
    </styles.Container>
  );
};

export default PostWritePage;
