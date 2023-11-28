import { configureStore } from "@reduxjs/toolkit";
import userReducers from "../features/user.slice";
import OffersReducers from "../features/offers.slice";

export default configureStore({
  reducer: {
    user: userReducers,
    offer: OffersReducers,
  },
});
