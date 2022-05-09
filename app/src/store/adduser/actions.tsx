import { User } from "../interfaces/editor";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { addUser } from "../services/api";
import { AxiosError } from "axios";

export const setUser = createAction<User[]>("user/setUser");

export const getUser = createAsyncThunk<
  void,
  never,
  { rejectValue: Record<string, string[]> }
>("user/getUser", async (_, { rejectWithValue, dispatch }) => {
  try {
    const users: any = await addUser;
    dispatch(setUser(users));
  } catch (err) {
    return rejectWithValue(
      // @ts-ignore
      (err as AxiosError).response?.data?.error.data || null
    );
  }
});
