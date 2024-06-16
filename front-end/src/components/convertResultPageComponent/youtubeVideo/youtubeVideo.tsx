import { useRef, forwardRef, useImperativeHandle } from 'react';
import YouTube from 'react-youtube';
import { getVideoId } from '@utils/getYoutubeId';

interface YoutubeVideoProps {
  youtubeUrl: string;
}

const YoutubeVideo = forwardRef<any, YoutubeVideoProps>(
  ({ youtubeUrl }, ref) => {
    const youtubePlayer = useRef<any>(null);

    const onPlayerReady = (event: any) => {
      youtubePlayer.current = event.target;
    };

    useImperativeHandle(ref, () => ({
      seekTo: (seconds: number) => {
        if (youtubePlayer.current) {
          youtubePlayer.current.seekTo(seconds);
        }
      },
    }));

    return (
      <YouTube
        videoId={getVideoId(youtubeUrl)}
        opts={{
          width: '600px',
          height: '350px',
          playerVars: {
            autoplay: 0,
            rel: 0,
            modestbranding: 1,
          },
        }}
        onReady={onPlayerReady}
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    );
  },
);

export default YoutubeVideo;
