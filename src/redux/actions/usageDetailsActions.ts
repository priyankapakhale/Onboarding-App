import { GET_USAGE_DETAILS, SAVE_USAGE_DETAILS } from "./actionTypes";

export const saveUsageDetails = (data: any) => ({
  type: SAVE_USAGE_DETAILS,
  payload: data,
});

export const getUsageDetails = () => ({
  type: GET_USAGE_DETAILS,
});
