import {
  PostAxiosInstance,
  PatchAxiosInstance,
  GetAxiosInstance,
  DeleteAxiosInstance,
} from '@axios/axios.method';
import {
  HighlightScriptRequest,
  SaveScriptRequest,
  UpdateScriptRequest,
} from '@server/requestType/userScript/userScript';
import {
  DeleteScriptResponse,
  GetKeywordListResponse,
  GetScriptDataResponse,
  GetScriptListResponse,
  HighlightScriptResponse,
  SaveScriptResponse,
  UpdateScriptResponse,
} from '@server/responseType/userScript/userScript';

// 스크립트 저장하기 /v1/user-scripts/save
export const saveScript = async (
  data: SaveScriptRequest,
): Promise<SaveScriptResponse> => {
  try {
    const res = await PostAxiosInstance<SaveScriptResponse>(
      `/v1/user-scripts/save`,
      data,
    );

    return res.data.result;
  } catch (error) {
    console.log('스크립트 저장하기 에러', error);
    throw error;
  }
};

// 스크립트 수정하기 /v1/user-scripts/{userScriptId}/update
export const updateScript = async (
  userScriptId: number,
  data: UpdateScriptRequest,
): Promise<UpdateScriptResponse> => {
  try {
    const res = await PatchAxiosInstance<UpdateScriptResponse>(
      `/v1/user-scripts/${userScriptId}/update`,
      data,
    );

    return res.data.result;
  } catch (error) {
    console.log('스크립트 수정하기 에러', error);
    throw error;
  }
};

// 스크립트 강조하기 /v1/user-scripts/{userScriptId}/highlights
export const highlightScript = async (
  userScriptId: number,
  data: HighlightScriptRequest,
): Promise<HighlightScriptResponse> => {
  try {
    const res = await PatchAxiosInstance<HighlightScriptResponse>(
      `/v1/user-scripts/${userScriptId}/highlights`,
      data,
    );

    return res.data.result;
  } catch (error) {
    console.log('스크립트 강조하기 에러', error);
    throw error;
  }
};

// 스크립트 삭제하기 /v1/user-scripts/{userScriptId}
export const deleteScript = async (
  userScriptId: number,
): Promise<DeleteScriptResponse> => {
  try {
    const res = await DeleteAxiosInstance<DeleteScriptResponse>(
      `/v1/user-scripts/${userScriptId}`,
    );

    return res.data.result;
  } catch (error) {
    console.log('스크립트 삭제하기 에러', error);
    throw error;
  }
};

// 스크립트 상세 정보 가져오기 /v1/user-scripts/{userScriptId}
export const getScriptData = async (
  userScriptId: number,
): Promise<GetScriptDataResponse> => {
  try {
    const res = await GetAxiosInstance<GetScriptDataResponse>(
      `/v1/user-scripts/${userScriptId}`,
    );

    return res.data.result;
  } catch (error) {
    console.log('스크립트 상세 정보 가져오기 에러', error);
    throw error;
  }
};

// 스크립트 목록 가져오기 /v1/user-scripts
export const getScriptList = async (): Promise<GetScriptListResponse> => {
  try {
    const res = await GetAxiosInstance<GetScriptListResponse>(
      `/v1/user-scripts`,
    );

    console.log(res.data.result);
    return res.data.result;
  } catch (error) {
    console.log('게시글 목록 가져오기 에러', error);
    throw error;
  }
};

// 스크립트 키워드 목록 가져오기 /v1/user-scripts/keywords
export const getKeywordList = async (): Promise<GetKeywordListResponse> => {
  try {
    const res = await GetAxiosInstance<GetKeywordListResponse>(
      `/v1/user-scripts/keywords`,
    );

    console.log(res.data.result);
    return res.data.result;
  } catch (error) {
    console.log('키워드 목록 가져오기 에러', error);
    throw error;
  }
};
