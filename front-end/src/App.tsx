import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import './App.css';

import BasicLayout from '@layout/BasicLayout';

import MainPage from '@pages/mainPage/mainPage';

import KakaoLoginPage from '@pages/socialLoginPage/kakaoLoginPage';
import NaverLoginPage from '@pages/socialLoginPage/naverLoginPage';

import ConvertResultPage from '@pages/convertResultPage/convertResultPage';
import SummarizeResultPage from '@pages/summarizeResultPage/summarizeResultPage';

import MyPage from '@pages/myPage/myPage';
import FollowListPage from '@pages/myFollowListPage/followListPage';

import MyScriptPage from '@pages/myScriptPage/myScriptPage';
import ScriptDetailPage from '@pages/scriptDetailPage/scriptDetailPage';

import PostPage from '@pages/postPage/postPage';
import PostWritePage from '@pages/postWritePage/postWritePage';
import PostDetailPage from '@pages/postDetailPage/postDetailPage';

import SettingPage from '@pages/settingPage/settingPage';

import NotFoundPage from '@pages/notFoundPage/notFoundPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<BasicLayout />}>
          <Route path="/" element={<MainPage />} />

          <Route path="/oauth2/kakao" element={<KakaoLoginPage />} />
          <Route path="/oauth2/naver" element={<NaverLoginPage />} />

          <Route path="/convertresult" element={<ConvertResultPage />} />
          <Route path="/summarizeresult" element={<SummarizeResultPage />} />

          <Route path="/myscript" element={<MyScriptPage />} />
          <Route path="/myscript/:id" element={<ScriptDetailPage />} />

          <Route path="/mypage/:id" element={<MyPage />} />
          <Route path="/mypage/:id/:type" element={<FollowListPage />} />

          <Route path="/post/:type" element={<PostPage />} />
          <Route path="/write" element={<PostWritePage />} />
          <Route path="/post/content/:id" element={<PostDetailPage />} />

          <Route path="/setting/:type" element={<SettingPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>,
    ),
  );

  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
