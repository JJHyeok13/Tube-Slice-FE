// import axios from 'axios';

// interface VideoInfo {
//   title: string;
//   viewCount: string;
// }

// export const fetchVideoInfo = async (videoUrl: string): Promise<VideoInfo> => {
//   try {
//     const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${getVideoId(
//       videoUrl,
//     )}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}}`;
//     const response = await axios.get(apiUrl);
//     const { title, viewCount } = response.data.items[0].snippet;
//     return { title, viewCount };
//   } catch (error) {
//     console.error('Error fetching video info:', error);
//     return { title: 'Error', viewCount: 'N/A' };
//   }
// };

// const getVideoId = (url: string): string | null => {
//   const regex =
//     /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
//   const match = url.match(regex);
//   return match && match[1];
// };
