"use client"

import { useRef } from "react"
import { store } from "@/store"
import { setSearchResults } from "@/store/searchSlice"

function Preloader({ searchResults }) {

  const loaded = useRef(false)
  if (!loaded.current) {
    store.dispatch(setSearchResults(searchResults))
    loaded.current = true
  }

  return null
}

export default Preloader