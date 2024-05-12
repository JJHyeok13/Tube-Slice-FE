export interface KakaoCodeRequest {
  client_id: string;
  redirect_uri: string;
  response_type: string;
}

export interface KakaoTokenRequest {
  grant_type: string;
  client_id: string;
  redirect_uri: string;
  code: string;
}
