import React, { useEffect, useState } from 'react';
import { getKakaoToken, socialLogin } from 'hooks/api/user';
import { useNavigate } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { firstNameState, loggedInState } from 'recoil/recoil';

import styles from './styles';

import { HashLoader } from 'react-spinners';

const KakaoLoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [kakaoToken, setKakaoToken] = useState('');

  const client_id = import.meta.env.VITE_KAKAO_REST_API_KEY;
  const redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  const [, setIsLoggedIn] = useRecoilState(loggedInState);
  const [, setFirstName] = useRecoilState(firstNameState);

  useEffect(() => {
    const fetchKakaoToken = async () => {
      try {
        setLoading(true);
        if (code) {
          const res = await getKakaoToken(client_id, redirect_uri, code);
          setKakaoToken(res.access_token);
          localStorage.setItem('kakaoToken', res.access_token);

          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchKakaoToken();
  }, []);

  useEffect(() => {
    const fetchJWT = async () => {
      try {
        setLoading(true);
        if (kakaoToken) {
          const res = await socialLogin(kakaoToken, 'kakao');
          localStorage.setItem('accessToken', res.result.access_token);

          setLoading(false);
          setIsLoggedIn(true);
          setFirstName(res.result.name);
          navigate('/');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchJWT();
  });

  return (
    <>
      <styles.Container>
        <HashLoader size="120px" color="#0075ff" loading={loading} />
      </styles.Container>
    </>
  );
};

export default KakaoLoginPage;
