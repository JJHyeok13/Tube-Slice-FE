import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <div>잘못된 페이지입니다.</div>
      <div onClick={handleClick}>돌아가기</div>
    </div>
  );
};

export default NotFoundPage;
