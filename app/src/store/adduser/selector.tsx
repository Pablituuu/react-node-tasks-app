import { RootState } from "../rootReducer";

export const selectUsers = (state: RootState) => state.editor.users.fonts;
