import React, { useState } from 'react';
import styles from './styles';

import { KeywordDataProps } from 'types/myScriptPage/myScriptPage';

const KeywordDropdown: React.FC<KeywordDataProps> = ({ keywordData }) => {
  const [selectedKeyword, setSelectedKeyword] = useState('키워드');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedKeyword(event.target.value);
  };

  return (
    <styles.Dropdown value={selectedKeyword} onChange={handleChange}>
      <styles.Options disabled>키워드</styles.Options>
      {keywordData.map((word) => (
        <styles.Options key={word.id} value={word.keyword}>
          {word.keyword}
        </styles.Options>
      ))}
    </styles.Dropdown>
  );
};

export default KeywordDropdown;
