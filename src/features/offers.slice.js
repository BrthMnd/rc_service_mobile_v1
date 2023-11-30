import { createSlice } from "@reduxjs/toolkit";

const initial = {
  candidates: null,
  offers: null,
  loading: true,
  error: null,
};
const OfferSlice = createSlice({
  name: "offers",
  initialState: initial,
  reducers: {
    ChangeOffers: (state, action) => {
      state.candidates = action.payload.data.response_candidate;
      state.offers = action.payload.data.response_offers;
    },
    ChangeLoading: (state, action) => {
      state.loading = action.payload;
    },
    ChangeError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { ChangeError, ChangeLoading, ChangeOffers } = OfferSlice.actions;
export default OfferSlice.reducer;
