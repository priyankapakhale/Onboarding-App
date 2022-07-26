import { GET_WORKSPACE_DETAIS, SAVE_WORKSPACE_DETAIS } from "./actionTypes";

export const saveWorkspaceDetails = (data: any) => ({
  type: SAVE_WORKSPACE_DETAIS,
  payload: data,
});

export const getWorkspaceDetails = () => ({
  type: GET_WORKSPACE_DETAIS,
});
