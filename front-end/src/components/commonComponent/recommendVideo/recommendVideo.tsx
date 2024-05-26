import React, { useEffect, useState } from 'react';
import styles from './styles';
import ViewCountIcon from '@assets/common/recommendVideoComponent/ViewCount.svg';
import { videoUrls } from './exampleData';
import { useRecoilValue } from 'recoil';
import { userInfo } from '@recoil/recoil';
import { fetchVideoInfo } from '@server/api/youtube'; // 경로 수정
import { getThumbnailUrl } from '@utils/getThumbnail';

const RecommendVideo: React.FC = () => {
  const userinfo = useRecoilValue(userInfo);
  const [videoInfos, setVideoInfos] = useState<
    { title: string; viewCount: string }[]
  >([]);

  useEffect(() => {
    const fetchVideoInfos = async () => {
      const newVideoInfos = await Promise.all(videoUrls.map(fetchVideoInfo));
      setVideoInfos(newVideoInfos);
    };

    if (videoUrls.length > 0) {
      fetchVideoInfos();
    }
  }, [videoUrls]);

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
        {videoInfos.map((videoInfo, index) => (
          <styles.Recommend key={index}>
            <styles.Thumbnail
              src={getThumbnailUrl(videoUrls[index])}
              alt={videoInfo.title} // videoInfo.title로 수정
              onClick={() => handleClick(videoUrls[index])}
            />
            <styles.VideoInfo>
              <div>{videoInfo.title}</div>
              <styles.ViewCountWrapper>
                <img src={ViewCountIcon} alt="View Count Icon" />
                <div>{videoInfo.viewCount}</div>
              </styles.ViewCountWrapper>
            </styles.VideoInfo>
          </styles.Recommend>
        ))}
      </styles.VideoWrapper>
    </styles.Container>
  );
};

export default RecommendVideo;
