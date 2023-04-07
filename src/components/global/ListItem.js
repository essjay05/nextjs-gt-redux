import Image from "next/image"
import utilStyles from "@/styles/utils.module.scss"
import styles from "./ListItem.module.scss"

const ListItem = ({ id, title, subtitle, imgSrc }) => {
  
  const placeholderImg = 'https://cdn.kustomerhostedcontent.com/media/5ff34d4f2e2de5e58056fa86/fc315c161af1e6ef3a345fdf0f687bd9.svg'
  // const handleImgError = e => {
  //   e.target.src = placeholderImg
  // }

  return (
    <div className={styles.itemContainer}>
      <Image
        priority
        src={imgSrc ? imgSrc : placeholderImg}
        className={`${styles.itemImg} ${utilStyles.borderCircle}`}
        height={144}
        width={144}
        alt={title}
        // onError={({ currentTarget }) => {
        //   currentTarget.onerror = null; // prevents looping
        //   currentTarget.src=placeholderImg;
        // }}
      />
      <div className={styles.itemText}>
        <h3 className={utilStyles.headingL}>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default ListItem