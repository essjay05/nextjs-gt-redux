import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

const initialState = {
  search: "",
  searchResults: []
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload
    }
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.events
      }
    }
  }
})

export const { setSearch, setSearchResults } = searchSlice.actions

export const selectResultsState = state => state.search.searchResults
export const selectSearchState = state => state.search.search

export default searchSlice.reducer