import React from "react"
import ListItem from "./global/ListItem"
import styles from "./Search.module.scss"

const TopPerformers = ({ performers }) => {

  // console.log('TopPerformers performers prop:')
  // console.log(performers)

  return (
    <div className={styles.collectionListContainer}>
      { performers.map((performerItem) => {
        const { id, short_name, name, hero_image_url } = {...performerItem}
        return (
          <ListItem
            key={id}
            id={id}
            title={short_name}
            subtitle={name}
            imgSrc={hero_image_url}
          />
        )
      })}
    </div>
  )
}

export default TopPerformers