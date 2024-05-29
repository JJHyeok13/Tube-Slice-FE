import React from 'react';
import { useLocation } from 'react-router-dom';

import LeftComponent from '@components/settingPageComponent/LeftComponent/LeftComponent';
import MyRecordComponent from '@components/settingPageComponent/myRecordComponent/myRecordComponent';
import ProfileSettingComponent from '@components/settingPageComponent/profileSettingComponent/ProfileSettingComponent';
import DeleteMemberComponent from '@components/settingPageComponent/deleteMemberComponent/DeleteMemberComponent';

import styles from './styles';
import { deleteMember } from '@server/api/user/user';

const SettingPage: React.FC = () => {
  const location = useLocation();

  const handleDeleteMember = async () => {
    const res = await deleteMember();

    localStorage.clear();
    return res.result;
  };

  return (
    <styles.Container>
      <LeftComponent />
      {location.pathname === '/setting/myrecord' && <MyRecordComponent />}
      {location.pathname === '/setting/profile' && <ProfileSettingComponent />}
      {location.pathname === '/setting/delete' && (
        <DeleteMemberComponent handleDeleteMember={handleDeleteMember} />
      )}
    </styles.Container>
  );
};

export default SettingPage;
