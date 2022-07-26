import { GET_CURRENT_STEP, SET_CURRENT_STEP } from "./actionTypes";

export const setCurrentStep = (data: any) => ({
  type: SET_CURRENT_STEP,
  payload: data,
});

export const getCurrentStep = () => ({
  type: GET_CURRENT_STEP,
});
