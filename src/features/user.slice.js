import { createSlice } from "@reduxjs/toolkit";
const state = {
  id: "",
  id_provider: "",
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
      state.id_provider = action.payload.id_provider;
      state.email = action.payload.email;
      state.direction = action.payload.direction;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.cc = action.payload.cc;
      state.score = action.payload.score;
    },
  },
});

export const { AddUser } = UserSlice.actions;
export default UserSlice.reducer;
