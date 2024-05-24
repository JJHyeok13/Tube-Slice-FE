export interface LoginApiResponse {
  isSuccess: boolean;
  code: string;
  message: string;
  result: LoginResponse;
}

export interface LoginResponse {
  userId: number;
  name: string;
  access_token: string;
  isUser: boolean;
}
