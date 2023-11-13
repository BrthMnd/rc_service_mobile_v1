import { createSlice } from "@reduxjs/toolkit";
const state = {
  id: "",
  email: "",
  name: "",
  service: "",
};
const UserSlice = createSlice({
  name: "user",
  initialState: state,
  reducers: {
    AddUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
    },
  },
});

export const { AddUser } = UserSlice.actions;
export default UserSlice.reducer;
