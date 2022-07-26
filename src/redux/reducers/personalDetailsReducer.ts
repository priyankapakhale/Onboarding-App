import { SAVE_PERSONAL_DETAILS } from "../actions/actionTypes";

const initialState = {};

const personalDetailsReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SAVE_PERSONAL_DETAILS:
      return { ...payload };
    default:
      return state;
  }
};

export default personalDetailsReducer;
