export const getThumbnailUrl = (videoUrl: string): string => {
  let videoId = '';

  // 'https://youtu.be/'로 시작하는 경우
  if (videoUrl.includes('https://youtu.be/')) {
    const startIndex =
      videoUrl.indexOf('https://youtu.be/') + 'https://youtu.be/'.length;
    videoId = videoUrl.slice(startIndex, startIndex + 11);
  }
  // 'https://www.youtube.com/watch?v='로 시작하는 경우
  else if (videoUrl.includes('https://www.youtube.com/watch?v=')) {
    const startIndex =
      videoUrl.indexOf('https://www.youtube.com/watch?v=') +
      'https://www.youtube.com/watch?v='.length;
    videoId = videoUrl.slice(startIndex, startIndex + 11);
  }

  return `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
};
