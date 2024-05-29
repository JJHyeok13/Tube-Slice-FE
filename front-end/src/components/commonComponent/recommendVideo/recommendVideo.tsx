import React from 'react';
import styles from './styles';
import ViewCountIcon from '@assets/common/recommendVideoComponent/ViewCount.svg';
import { videoUrls } from './exampleData';
import { useRecoilValue } from 'recoil';
import { userInfo } from '@recoil/recoil';
//import { fetchVideoInfo } from '@server/api/youtube';
import { getThumbnailUrl } from '@utils/getThumbnail';

const RecommendVideo: React.FC = () => {
  const userinfo = useRecoilValue(userInfo);
  const videoInfos = videoUrls;

  // useEffect(() => {
  //   const fetchVideoInfos = async () => {
  //     const newVideoInfos = await Promise.all(videoUrls.map(fetchVideoInfo));
  //     setVideoInfos(newVideoInfos);
  //   };

  //   if (videoUrls.length > 0) {
  //     fetchVideoInfos();
  //   }
  // }, [videoUrls]);

  const convertToShortFormat = (value: number) => {
    if (value >= 1000000) {
      return (value / 1000000).toFixed(1) + 'M';
    } else if (value >= 1000) {
      return (value / 1000).toFixed(1) + 'k';
    } else {
      return value.toString();
    }
  };

  const handleClick = (address: string) => {
    window.open(`${address}`, '_blank');
  };

  return (
    <styles.Container>
      <styles.Header>
        <styles.Nickname>{userinfo.userName}</styles.Nickname>님을 위한
        추천영상이에요
      </styles.Header>
      <styles.VideoWrapper>
        {videoInfos.map((videoInfo) => (
          <styles.Recommend key={videoInfo.id}>
            <styles.Thumbnail
              src={getThumbnailUrl(videoInfo.videoUrl)}
              alt={videoInfo.title} // videoInfo.title로 수정
              onClick={() => handleClick(videoInfo.videoUrl)}
            />
            <styles.VideoInfo>
              <div>
                {videoInfo.title.length > 25
                  ? videoInfo.title.substring(0, 23)
                  : videoInfo.title}
              </div>
              <styles.ViewCountWrapper>
                <img src={ViewCountIcon} alt="View Count Icon" />
                <div>{convertToShortFormat(videoInfo.viewCount)}</div>
              </styles.ViewCountWrapper>
            </styles.VideoInfo>
          </styles.Recommend>
        ))}
      </styles.VideoWrapper>
    </styles.Container>
  );
};

export default RecommendVideo;
