import React from "react"
import ListItem from "./global/ListItem"
import styles from "./Search.module.scss"

const TopVenues = ({ venues }) => {

  // console.log('TopVenues venues prop:')
  // console.log(venues)

  return (
    <div className={styles.collectionListContainer}>
      { venues.map((venueItem) => {
        const { id, city, image_url, name } = {...venueItem}
        return (
          <ListItem
            key={id}
            id={id}
            title={name}
            subtitle={city}
            imgSrc={image_url}
          />
        )
      })}
    </div>
  )
}

export default TopVenues