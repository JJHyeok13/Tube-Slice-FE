import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import LeftComponent from '@components/settingPageComponent/LeftComponent/LeftComponent';
import MyRecordComponent from '@components/settingPageComponent/myRecordComponent/myRecordComponent';
import ProfileSettingComponent from '@components/settingPageComponent/profileSettingComponent/ProfileSettingComponent';
import DeleteMemberComponent from '@components/settingPageComponent/deleteMemberComponent/DeleteMemberComponent';

import styles from './styles';
import {
  deleteMember,
  getUserProfile,
  updateUserProfile,
} from '@server/api/user/user';
import { PatchAxiosInstance, PostAxiosInstance } from '@axios/axios.method';
import { UploadImageResponse } from '@server/responseType/image/image';

const SettingPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedImage, setSelectedImage] = useState<File | null>();

  const [userProfile, setUserProfile] = useState({
    userId: 0,
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

  useEffect(() => {
    getUserProfile().then((res) => setUserProfile(res));
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleUpdateProfile = async () => {
    try {
      let imageId;
      if (selectedImage) {
        const formData = new FormData();
        formData.append('fileList', selectedImage);

        const response = await PostAxiosInstance<UploadImageResponse>(
          '/v1/images/upload',
          formData,
        );

        imageId = response.data.result.imageIds[0];
      }

      const updatedProfile = {
        ...userProfile,
        profileUrl: imageId
          ? `/path/to/your/image/${imageId}`
          : userProfile.profileUrl, // Update this path as needed
      };

      await updateUserProfile(updatedProfile);

      // Optionally update the user profile state with the new data
      setUserProfile(updatedProfile);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const handleDeleteMember = async () => {
    const res = await deleteMember();

    localStorage.clear();
    navigate('/');
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
          handleImageChange={handleImageChange}
        />
      )}
      {location.pathname === '/setting/delete' && (
        <DeleteMemberComponent handleDeleteMember={handleDeleteMember} />
      )}
    </styles.Container>
  );
};

export default SettingPage;
