import styles from "./Search.module.scss"
import TopEvents from "./TopEvents"
import TopPerformers from "./TopPerformers"
import TopVenues from "./TopVenues"

const SearchResults = ({ searchResults }) => {

  // Separate filtered events by grouping
  const { events, performers, venues } = {...searchResults}
  // Helper function to get top selection for each grouping
  const sampleSize = 3
  const getTopSelection = (collection, selectionSize) => {
    const topSelection = collection?.slice(0, selectionSize)
    return topSelection
  }
  const getResultsLength = (collection) => {
    const collectionCount = collection?.length > 0 ? collection.length : 0
    return collectionCount
  }

  const eventCount = getResultsLength(events)
  const performerCount = getResultsLength(performers)
  const venueCount = getResultsLength(venues)

  const topEvents = getTopSelection(events, sampleSize)
  const topPerformers = getTopSelection(performers, sampleSize)
  const topVenues = getTopSelection(venues, sampleSize)

  return (
    <div className={styles.searchResultsContainer}>
      <div>
        {eventCount > 0 ? <TopEvents events={topEvents}/> : <></>}
        {performerCount > 0 ? <TopPerformers performers={topPerformers}/> : <></>}
        {venueCount > 0 ? <TopVenues venues={topVenues}/> : <></>}
      </div>
    </div>
  )
}

export default SearchResults