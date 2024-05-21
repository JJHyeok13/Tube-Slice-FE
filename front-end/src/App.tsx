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

import MyScriptPage from '@pages/myScriptPage/myScriptPage';
import SettingPage from '@pages/settingPage/settingPage';
import BoardPage from '@pages/boardPage/boardPage';
import ConvertResultPage from '@pages/convertResultPage/convertResultPage';
import MyPage from '@pages/myPage/myPage';
import SummarizeResultPage from '@pages/summarizeResultPage/summarizeResultPage';
import BoardDetailPage from '@pages/boardDetailPage/boardDetailPage';
import FollowListPage from '@pages/myFollowListPage/followListPage';
import BoardWritePage from '@pages/boardWritePage/boardWritePage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<BasicLayout />}>
          <Route path="/" element={<MainPage />} />

          <Route path="/oauth2/kakao" element={<KakaoLoginPage />} />
          <Route path="/oauth2/naver" element={<NaverLoginPage />} />

          <Route path="/convertresult" element={<ConvertResultPage />} />

          <Route path="summarizeresult" element={<SummarizeResultPage />} />

          <Route path="/myscript" element={<MyScriptPage />} />

          <Route path="/mypage/:id" element={<MyPage />} />
          <Route path="/mypage/:id/:follow" element={<FollowListPage />} />

          <Route path="/board/:type" element={<BoardPage />} />
          <Route path="/write" element={<BoardWritePage />} />
          <Route path="/board/content/:id" element={<BoardDetailPage />} />

          <Route path="/setting/:type" element={<SettingPage />} />
        </Route>
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
