import axios from 'axios';
import { LoginApiResponse, LoginResponse } from '@server/responseType/member';

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

export const getNaverToken = async (
  client_id: string,
  cliend_secret: string,
  code: string,
  state: string,
) => {
  const res = await axios.post(
    `https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=${client_id}&client_secret=${cliend_secret}&code=${code}&state=${state}`,
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
  const res = await axios.post<LoginApiResponse>(
    `https://www.tubeslice.shop:8080/v1/oauth/login?access_token=${access_token}&social_type=${social_type}`,
  );
  return res.data.result;
};
