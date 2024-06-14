import React from 'react';

import styles from './styles';

interface TimelineContainerProps {
  timelineData: {
    timelineId: 0;
    startTime: 0;
    endTime: 0;
    description: '';
  }[];
}

const TimelineContainer: React.FC<TimelineContainerProps> = ({
  timelineData,
}) => {
  return (
    <styles.Container>
      {timelineData.map((timeline) => (
        <div key={timeline.timelineId}>
          <div>{timeline.startTime}</div>
          <div>{timeline.endTime}</div>
          <div>{timeline.description}</div>
        </div>
      ))}
    </styles.Container>
  );
};

export default TimelineContainer;
