import { configureStore } from "@reduxjs/toolkit"
import searchSliceReducer from "./searchSlice"
import { gtApi } from "./gtApi"

export const store = configureStore({
  reducer: {
    search: searchSliceReducer,
    gtApi: gtApi.reducer
  },
  devTools: true,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(gtApi.middleware);
  },
})
