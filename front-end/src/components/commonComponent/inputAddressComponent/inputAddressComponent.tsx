import React from 'react';

import styles from './styles';

interface Props {
  description: string;
  buttonName: string;
}

const InputAddressComponent: React.FC<Props> = ({
  description,
  buttonName,
}) => {
  return (
    <>
      <h2>{description}</h2>
      <styles.InputWrapper>
        <styles.AddressInput type="url" placeholder="https://www.youtube.com" />
        <styles.Button>{buttonName}</styles.Button>
      </styles.InputWrapper>
    </>
  );
};

export default InputAddressComponent;
