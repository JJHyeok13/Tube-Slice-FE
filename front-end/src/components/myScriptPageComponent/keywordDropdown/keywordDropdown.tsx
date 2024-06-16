import React, { useState } from 'react';
import styles from './styles';

import { KeywordListProps } from 'types/myScriptPage/myScriptPage';

const KeywordDropdown: React.FC<KeywordListProps> = ({ script_keywords }) => {
  const [selectedKeyword, setSelectedKeyword] = useState('키워드');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedKeyword(event.target.value);
  };

  return (
    <styles.Dropdown value={selectedKeyword} onChange={handleChange}>
      <styles.Options disabled>키워드</styles.Options>
      {/* @ts-ignore */}
      {script_keywords.script_keywords.map((word, index) => (
        <styles.Options key={index} value={word.keyword}>
          {word.keyword}
        </styles.Options>
      ))}
    </styles.Dropdown>
  );
};

export default KeywordDropdown;
