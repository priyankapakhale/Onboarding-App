import { SAVE_USAGE_DETAILS } from "../actions/actionTypes";

const initialState = {};

const usageDetailsReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SAVE_USAGE_DETAILS:
      return { ...payload };
    default:
      return state;
  }
};

export default usageDetailsReducer;
