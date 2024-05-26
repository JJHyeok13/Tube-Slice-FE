import React, { useRef, useState } from 'react';

import YouTube from 'react-youtube';
import { ConvertResultProps } from 'types/convertResultPage/convertResultPage';
import { SummarizeResultProps } from 'types/summarizeResultPage/summarizeResultPage';

const YoutubeVideo: React.FC<ConvertResultProps | SummarizeResultProps> = ({
  resultData,
}) => {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const youtubePlayer = useRef<any>(null);

  const getVideoId = (url: string): string => {
    let videoId = '';

    // 'https://youtu.be/'로 시작하는 경우
    if (url.includes('https://youtu.be/')) {
      const startIndex =
        url.indexOf('https://youtu.be/') + 'https://youtu.be/'.length;
      videoId = url.slice(startIndex, startIndex + 11);
    }
    // 'https://www.youtube.com/watch?v='로 시작하는 경우
    else if (url.includes('https://www.youtube.com/watch?v=')) {
      const startIndex =
        url.indexOf('https://www.youtube.com/watch?v=') +
        'https://www.youtube.com/watch?v='.length;
      videoId = url.slice(startIndex, startIndex + 11);
    }

    return videoId;
  };

  // YouTube 플레이어 이벤트 핸들러
  const onPlayerReady = (event: any) => {
    youtubePlayer.current = event.target;
  };

  // 시간값을 받아와서 비디오 플레이어를 해당 시간으로 이동시키는 함수
  const seekToTime = (time: number) => {
    if (youtubePlayer.current) {
      youtubePlayer.current.seekTo(time);
    }
  };

  return (
    <>
      <YouTube
        videoId={getVideoId(resultData.video.url)}
        opts={{
          width: '90%',
          height: '350px',
          playerVars: {
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
          },
        }}
        onReady={onPlayerReady}
        onPlay={(event) => setCurrentTime(event.target.getCurrentTime())}
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    </>
  );
};

export default YoutubeVideo;
