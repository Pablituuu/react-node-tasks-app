import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./reducer/reducer";

const rootReducer = combineReducers({
  editor: combineReducers({
    users: userReducer,
  }),
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
