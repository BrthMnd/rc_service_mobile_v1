import { createSlice } from "@reduxjs/toolkit";

const initial = {
  reload: 1,
};
const ReloadSlice = createSlice({
  name: "reload",
  initialState: initial,
  reducers: {
    Reload: (state) => {
      state.reload = state.reload + 1;
    },
  },
});

export const { Reload } = ReloadSlice.actions;
export default ReloadSlice.reducer;
