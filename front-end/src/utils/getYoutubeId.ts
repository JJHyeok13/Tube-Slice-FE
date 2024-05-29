export const getVideoId = (url: string): string => {
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
