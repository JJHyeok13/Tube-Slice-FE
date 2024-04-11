import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import './App.css';
import BasicLayout from '@layout/BasicLayout';

import SignInPage from '@pages/signInPage/signInPage';
import MainPage from '@pages/mainPage/mainPage';
import ConvertPage from '@pages/convertPage/convertPage';
import SummarizePage from '@pages/summarizePage/summarizePage';
import MyScriptPage from '@pages/myScriptPage/myScriptPage';
import MyPage from '@pages/myPage/myPage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/signin" element={<SignInPage />} />

        <Route element={<BasicLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/convert" element={<ConvertPage />} />
          <Route path="/summarize" element={<SummarizePage />} />
          <Route path="/myscript" element={<MyScriptPage />} />
          <Route path="/mypage/:type" element={<MyPage />} />
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
