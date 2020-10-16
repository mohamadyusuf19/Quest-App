import { combineReducers } from "redux";
import contentReducer from "./contentReducer";

export default combineReducers({
  content: contentReducer
});
