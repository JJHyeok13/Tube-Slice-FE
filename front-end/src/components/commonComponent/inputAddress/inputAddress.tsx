import React from 'react';

import styles from './styles';

import { InputAddressProps } from 'types/common/inputAddress';

const InputAddress: React.FC<InputAddressProps> = ({
  description,
  buttonName,
  handleStart,
}) => {
  return (
    <>
      <h2>{description}</h2>
      <styles.InputWrapper>
        <styles.AddressInput type="url" placeholder="https://www.youtube.com" />
        <styles.Button onClick={handleStart}>{buttonName}</styles.Button>
      </styles.InputWrapper>
    </>
  );
};

export default InputAddress;
