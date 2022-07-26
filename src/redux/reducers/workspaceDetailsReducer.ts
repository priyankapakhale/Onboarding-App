import { SAVE_WORKSPACE_DETAIS } from "../actions/actionTypes";

const initialState = {};

const workspaceDetailsReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SAVE_WORKSPACE_DETAIS:
      return { ...payload };
    default:
      return state;
  }
};

export default workspaceDetailsReducer;
