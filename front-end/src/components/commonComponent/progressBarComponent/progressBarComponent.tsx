import React from 'react';
import styles from './styles';

const ProgressBarComponent: React.FC = () => {
  return (
    <>
      <styles.ProgressBar>
        <styles.Progress width={45}></styles.Progress>
      </styles.ProgressBar>
      <styles.Percentage>45%</styles.Percentage>
    </>
  );
};

export default ProgressBarComponent;
