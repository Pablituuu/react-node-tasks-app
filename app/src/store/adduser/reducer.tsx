import { User } from "../interfaces/editor";
import { createReducer } from "@reduxjs/toolkit";
import { setUser } from "./actions";

export interface UserState {
  fonts: User[];
}

const initialState: UserState = {
  fonts: [],
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, { payload }) => {
    state.fonts = payload;
  });
});
