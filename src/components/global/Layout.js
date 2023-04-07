import Head from "next/head"
import styles from "./Layout.module.scss"
import PropTypes from "prop-types"

export const siteTitle = "Gametime Front End Web Code Challenge"

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="https://cdn.kustomerhostedcontent.com/media/5ff34d4f2e2de5e58056fa86/fc315c161af1e6ef3a345fdf0f687bd9.svg" />
        <meta
          name="description"
          content="Gametime app: search Oakland events, performers, and venues."
        />
        <meta
          name="og:title"
          content={siteTitle}
        />
      </Head>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}