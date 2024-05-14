import axios from 'axios';
import { LoginResponse } from '@server/responseType/member';
import { PostAxiosInstance } from '@axios/axios.method';

export const getKakaoToken = async (
  client_id: string,
  redirect_uri: string,
  code: string,
) => {
  const res = await axios.post(
    `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    },
  );
  return res.data;
};

export const socialLogin = async (
  access_token: string,
  social_type: 'kakao' | 'naver',
): Promise<LoginResponse> => {
  const res = await PostAxiosInstance<LoginResponse>(
    `/v1/oauth/login?access_token=${access_token}&social_type=${social_type}`,
  );
  return res.data;
};
