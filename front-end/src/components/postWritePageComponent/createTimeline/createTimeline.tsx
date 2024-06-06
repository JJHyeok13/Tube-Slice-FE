import React, { ChangeEvent, useEffect, useState } from 'react';

import styles from './styles';
import { renderOptions } from '@utils/createTimeOption';

interface CreateTimelineProps {
  onClose: () => void;
  handleStartTime: (hour: number, minute: number, second: number) => void;
  handleEndTime: (hour: number, minute: number, second: number) => void;
}

const CreateTimeline: React.FC<CreateTimelineProps> = ({
  onClose,
  handleStartTime,
  handleEndTime,
}) => {
  const [startTimeHour, setStartTimeHour] = useState<number>(0);
  const [startTimeMinute, setStartTimeMinute] = useState<number>(0);
  const [startTimeSecond, setStartTimeSecond] = useState<number>(0);

  const [endTimeHour, setEndTimeHour] = useState<number>(0);
  const [endTimeMinute, setEndTimeMinute] = useState<number>(0);
  const [endTimeSecond, setEndTimeSecond] = useState<number>(0);

  useEffect(() => {
    handleStartTime(startTimeHour, startTimeMinute, startTimeSecond);
    handleEndTime(endTimeHour, endTimeMinute, endTimeSecond);
  }, [
    startTimeHour,
    startTimeMinute,
    startTimeSecond,
    endTimeHour,
    endTimeMinute,
    endTimeSecond,
  ]);

  return (
    <styles.Modal>
      <styles.ExitButton onClick={onClose} />
      <styles.TimeContainer>
        <h3>타임라인</h3>
        <styles.TimeSelectContainer>
          <select
            value={startTimeHour}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setStartTimeHour(parseInt(e.target.value))
            }
          >
            {renderOptions()}
          </select>
          :
          <select
            value={startTimeMinute}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setStartTimeMinute(parseInt(e.target.value))
            }
          >
            {renderOptions()}
          </select>
          :
          <select
            value={startTimeSecond}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setStartTimeSecond(parseInt(e.target.value))
            }
          >
            {renderOptions()}
          </select>
          ~
          <select
            value={endTimeHour}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setEndTimeHour(parseInt(e.target.value))
            }
          >
            {renderOptions()}
          </select>
          :
          <select
            value={endTimeMinute}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setEndTimeMinute(parseInt(e.target.value))
            }
          >
            {renderOptions()}
          </select>
          :
          <select
            value={endTimeSecond}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              setEndTimeSecond(parseInt(e.target.value))
            }
          >
            {renderOptions()}
          </select>
        </styles.TimeSelectContainer>
      </styles.TimeContainer>
      <styles.DescriptionContainer>
        <h3>한줄 설명</h3>
        <styles.DescriptionInput
          type="text"
          placeholder="해당 타임라인에 대한 설명을 작성해주세요."
        />
      </styles.DescriptionContainer>
      <div>추가</div>
    </styles.Modal>
  );
};

export default CreateTimeline;
