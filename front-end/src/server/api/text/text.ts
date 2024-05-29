import { PostAxiosInstance } from '@axios/axios.method';
import { SummarizeResponse } from '@server/responseType/text/text';

// 동영상 요약하기 /v1/text/summary?row="row"&youtubeUrl="youtubeUrl"
export const SummarizeVideo = async (
  row: string,
  youtubeUrl: string,
): Promise<SummarizeResponse> => {
  try {
    const res = await PostAxiosInstance<SummarizeResponse>(
      `/v1/text/summary?row=${row}&youtubeUrl=${youtubeUrl}`,
    );

    return res.data.result;
  } catch (error) {
    console.log('요약하기 에러', error);
    throw error;
  }
};
