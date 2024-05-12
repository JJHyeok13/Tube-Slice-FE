// accessToken 저장
export const setAccessToken = async (accessToken: string): Promise<void> => {
  localStorage.setItem('accessToken', accessToken);
};

// accessToken 가져오기
export const getAccessToken = async (): Promise<string | null> => {
  return localStorage.getItem('accessToken');
};

// refreshToken 저장
export const setRefreshToken = async (refreshToken: string): Promise<void> => {
  localStorage.setItem('refreshToken', refreshToken);
};

// refreshToken 가져오기
export const getRefreshToken = async (): Promise<string | null> => {
  return localStorage.getItem('refreshToken');
};

// 토큰들 모두 삭제 (로그아웃)
export const deleteToken = async (): Promise<void> => {
  localStorage.clear();
};
