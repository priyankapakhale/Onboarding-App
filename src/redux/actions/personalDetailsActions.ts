import { GET_PERSONAL_DETAILS, SAVE_PERSONAL_DETAILS } from "./actionTypes";

export const savePersonalDetails = (data: any) => ({
  type: SAVE_PERSONAL_DETAILS,
  payload: data,
});

export const getPersonalDetails = () => ({
  type: GET_PERSONAL_DETAILS,
});
