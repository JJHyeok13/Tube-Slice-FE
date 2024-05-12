import React, { useEffect, useState } from 'react';
import { getKakaoToken, socialLogin } from 'hooks/api/member';
import { HashLoader } from 'react-spinners';

const KakaoLoginPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [kakaoToken, setKakaoToken] = useState('');

  const client_id = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  useEffect(() => {
    const fetchKakaoToken = async () => {
      try {
        setLoading(true);
        if (code) {
          const res = await getKakaoToken(client_id, redirect_uri, code);
          setKakaoToken(res.access_token);
          localStorage.setItem('access_token', res.access_token);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    console.log(code);
    console.log(client_id);
    console.log(redirect_uri);
    fetchKakaoToken();
  }, []);

  useEffect(() => {
    const fetchJWT = async () => {
      try {
        setLoading(true);
        if (kakaoToken) {
          const res = await socialLogin(kakaoToken, 'kakao');
          localStorage.setItem('JWT', res.result.access_token);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchJWT();
  });

  return <HashLoader size="120" color="#0075ff" loading={loading} />;
};

export default KakaoLoginPage;
