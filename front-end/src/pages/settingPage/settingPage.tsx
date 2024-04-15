import React from 'react';
import { useLocation } from 'react-router-dom';

import LeftComponent from '@components/settingPageComponent/LeftComponent/LeftComponent';
import MyRecordComponent from '@components/settingPageComponent/myRecordComponent/myRecordComponent';
import ProfileSettingComponent from '@components/settingPageComponent/profileSettingComponent/ProfileSettingComponent';
import DeleteMemberComponent from '@components/settingPageComponent/deleteMemberComponent/DeleteMemberComponent';

import styles from './styles';

const SettingPage: React.FC = () => {
  const location = useLocation();
  return (
    <styles.Container>
      <LeftComponent />

      {location.pathname === '/setting/myrecord' && <MyRecordComponent />}
      {location.pathname === '/setting/profile' && <ProfileSettingComponent />}
      {location.pathname === '/setting/delete' && <DeleteMemberComponent />}
    </styles.Container>
  );
};

export default SettingPage;
