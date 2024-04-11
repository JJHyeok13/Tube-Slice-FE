import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './styles';

import LeftComponent from '../../components/myPageComponent/LeftComponent/LeftComponent';
import MyRecordComponent from '../../components/myPageComponent/myRecordComponent/myRecordComponent';
import ProfileSettingComponent from '../../components/myPageComponent/profileSettingComponent/ProfileSettingComponent';
import DeleteMemberComponent from '../../components/myPageComponent/deleteMemberComponent/DeleteMemberComponent';

const MyPage: React.FC = () => {
  const location = useLocation();
  return (
    <styles.Container>
      <LeftComponent />

      {location.pathname === '/mypage/myrecord' && <MyRecordComponent />}
      {location.pathname === '/mypage/profile' && <ProfileSettingComponent />}
      {location.pathname === '/mypage/delete' && <DeleteMemberComponent />}
    </styles.Container>
  );
};

export default MyPage;
