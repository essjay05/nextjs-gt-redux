import { store } from "@/store"

import SearchResults from "./SearchResults"
// ServerSide Rendering version 
export default function SSRSearchResults() {
  return (
    <>
      <SearchResults results={store.getState().search.searchResults}/>
    </>
  )
}