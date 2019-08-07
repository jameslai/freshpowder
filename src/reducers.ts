import { combineReducers } from "redux";

import databases from "./Databases/databasesReducers";

export const rootReducer = combineReducers({
  databases
});
