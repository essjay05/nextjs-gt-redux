import React from "react"
import PropTypes from "prop-types"
import ListItem from "./global/ListItem"
import styles from "./Search.module.scss"

const TopEvents = ({ events }) => {

  return (
    <div className={styles.collectionListContainer}>
      { events.map((eventItem, index) => {
        const { event, performers, venue } = {...eventItem}
        return (
          <ListItem
            key={index}
            id={event.id}
            title={event.name}
            subtitle={venue.name}
            imgSrc={performers[0].hero_image_url}
          />
        )
      })}
    </div>
  )
}

export default TopEvents

TopEvents.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object)
}