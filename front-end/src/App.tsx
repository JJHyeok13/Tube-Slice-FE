import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import './App.css';
import BasicLayout from '@layout/BasicLayout';

import MainPage from '@pages/mainPage/mainPage';

import KakaoLoginPage from '@pages/socialLoginPage/kakaoLoginPage';
import ConvertPage from '@pages/convertPage/convertPage';
import SummarizePage from '@pages/summarizePage/summarizePage';
import MyScriptPage from '@pages/myScriptPage/myScriptPage';
import SettingPage from '@pages/settingPage/settingPage';
import BoardPage from '@pages/boardPage/boardPage';
import ConvertResultPage from '@pages/convertResultPage/convertResultPage';
import MyPage from '@pages/myPage/myPage';
import SummarizeResultPage from '@pages/summarizeResultPage/summarizeResultPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<BasicLayout />}>
          <Route path="/" element={<MainPage />} />

          <Route path="/oauth2/kakao" element={<KakaoLoginPage />} />

          <Route path="/convert" element={<ConvertPage />} />
          <Route path="/convertresult" element={<ConvertResultPage />} />

          <Route path="/summarize" element={<SummarizePage />} />
          <Route path="summarizeresult" element={<SummarizeResultPage />} />

          <Route path="/myscript" element={<MyScriptPage />} />

          <Route path="/mypage" element={<MyPage />} />

          <Route path="/board/:type" element={<BoardPage />} />

          <Route path="/setting/:type" element={<SettingPage />} />
        </Route>
      </Route>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
