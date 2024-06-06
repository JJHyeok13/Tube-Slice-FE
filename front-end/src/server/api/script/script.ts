import { GetAxiosInstance } from '@axios/axios.method';
import { SubtitlesResponse } from '@server/responseType/script/script';

// 스크립트 소제목 가져오기 /v1/scripts/subtitles
export const getScriptSubtitles = async (
  youtubeUrl: string,
): Promise<SubtitlesResponse> => {
  try {
    const res = await GetAxiosInstance<SubtitlesResponse>(
      `/v1/scripts/subtitles?youtubeUrl=${youtubeUrl}`,
    );

    return res.data.result;
  } catch (error) {
    console.log('스크립트 소제목 가져오기', error);
    throw error;
  }
};
