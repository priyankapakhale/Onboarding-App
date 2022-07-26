import { SET_CURRENT_STEP } from "../actions/actionTypes";

const initialState = {
  currentStep: 1,
};

const stepperReducer = (state = initialState, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_STEP:
      return { ...payload };
    default:
      return state;
  }
};

export default stepperReducer;
