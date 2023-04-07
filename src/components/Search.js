"use client";

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { store } from "@/store"
import { setSearch, selectSearchState, selectResultsState } from "@/store/searchSlice"
import { gtApi } from "@/store/gtApi";

import styles from "./Search.module.scss"
import SearchResults from "@/components/SearchResults"

export default function Search() {

  const dispatch = useDispatch()
  const searchTerm = useSelector(selectSearchState)
  const startupResults = useSelector(selectResultsState)
  const apiData = useSelector(state => state.gtApi.queries[`search("${searchTerm}")`]?.data)

  useEffect(() => {
    dispatch(gtApi.endpoints.search.initiate(searchTerm))
  },[dispatch, searchTerm])

  const handleSearch = (e) => dispatch(setSearch(e.target.value))

  return (
    <>
      <section className={styles.searchContainer}>
        <label
          htmlFor="search"
          hidden
          className={styles.label}>
          "Search event, performer, or venue..."
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className={styles.textInput}
          id="search"
          name="Search"
          ariaLabel="Search"
          placeholder="Search event, performer, or venue..."/>
      </section>
      <SearchResults searchResults={searchTerm.length ? apiData ?? [] : startupResults}/>
    </>
  )
}

