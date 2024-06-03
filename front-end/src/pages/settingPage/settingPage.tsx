import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import LeftComponent from '@components/settingPageComponent/LeftComponent/LeftComponent';
import MyRecordComponent from '@components/settingPageComponent/myRecordComponent/myRecordComponent';
import ProfileSettingComponent from '@components/settingPageComponent/profileSettingComponent/ProfileSettingComponent';
import DeleteMemberComponent from '@components/settingPageComponent/deleteMemberComponent/DeleteMemberComponent';

import styles from './styles';
import { deleteMember, updateUserProfile } from '@server/api/user/user';

const SettingPage: React.FC = () => {
  const location = useLocation();

  const [userProfile, setUserProfile] = useState({
    nickname: '',
    profileUrl: '',
    introduction: '',
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // 유저 프로필 정보 조회 API 필요
  useEffect(() => {});

  const handleUpdateProfile = async () => {
    const res = await updateUserProfile(userProfile);

    return res;
  };

  const handleDeleteMember = async () => {
    const res = await deleteMember();

    localStorage.clear();
    return res.result;
  };

  return (
    <styles.Container>
      <LeftComponent />
      {location.pathname === '/setting/myrecord' && <MyRecordComponent />}
      {location.pathname === '/setting/profile' && (
        <ProfileSettingComponent
          userProfile={userProfile}
          handleInput={handleInput}
          handleUpdateProfile={handleUpdateProfile}
        />
      )}
      {location.pathname === '/setting/delete' && (
        <DeleteMemberComponent handleDeleteMember={handleDeleteMember} />
      )}
    </styles.Container>
  );
};

export default SettingPage;
