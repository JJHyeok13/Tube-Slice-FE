import React, { useEffect, useState } from 'react';
import { getNaverToken, socialLogin } from '@server/api/oauth';
import { useNavigate } from 'react-router-dom';

import { useRecoilState } from 'recoil';
import { userInfo, loggedInState } from 'recoil/recoil';

import styles from './styles';

import { HashLoader } from 'react-spinners';

const NaverLoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [naverToken, setNaverToken] = useState('');

  const client_id = import.meta.env.VITE_NAVER_REST_API_KEY;
  const client_secret = import.meta.env.VITE_NAVER_CLIENT_SECRET;
  const state_string = import.meta.env.VITE_NAVER_STATE_STRING;

  const urlParams = new URLSearchParams(window.location.search);
  const code = urlParams.get('code');

  const [, setIsLoggedIn] = useRecoilState(loggedInState);
  const [, setUserInfo] = useRecoilState(userInfo);

  useEffect(() => {
    const fetchNaverToken = async () => {
      try {
        setLoading(true);
        if (code) {
          const res = await getNaverToken(
            client_id,
            client_secret,
            code,
            state_string,
          );
          setNaverToken(res.access_token);
          localStorage.setItem('naverToken', res.access_token);

          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchNaverToken();
  }, []);

  useEffect(() => {
    const fetchJWT = async () => {
      try {
        setLoading(true);
        if (naverToken) {
          const res = await socialLogin(naverToken, 'naver');
          localStorage.setItem('accessToken', res.access_token);

          setLoading(false);
          setIsLoggedIn(true);
          setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            userId: res.userId,
            userName: res.name,
          }));
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

export default NaverLoginPage;
