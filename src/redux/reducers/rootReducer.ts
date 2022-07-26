import { combineReducers } from "redux";
import personalDetailsReducer from "./personalDetailsReducer";
import stepperReducer from "./stepperReducer";
import usageDetailsReducer from "./usageDetailsReducer";
import workspaceDetailsReducer from "./workspaceDetailsReducer";

const rootReducer = combineReducers({
  personal: personalDetailsReducer,
  workspace: workspaceDetailsReducer,
  usage: usageDetailsReducer,
  stepper: stepperReducer,
});

export default rootReducer;
