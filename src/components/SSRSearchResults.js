import { store } from "@/store"

import SearchResults from "./SearchResults"

export default function SSRSearchResults() {
  return (
    <>
      <SearchResults results={store.getState().search.searchResults}/>
    </>
  )
}