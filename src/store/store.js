import { configureStore } from "@reduxjs/toolkit";
import userReducers from "../features/user.slice";
import OffersReducers from "../features/offers.slice";
import reloadReducers from "../features/reload.slice";

export default configureStore(
  {
    reducer: {
      user: userReducers,
      offer: OffersReducers,
      reload: reloadReducers,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
