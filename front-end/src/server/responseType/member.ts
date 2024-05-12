export interface LoginResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: {
    userId: number;
    name: string;
    access_token: string;
    isUser: boolean;
  };
}
