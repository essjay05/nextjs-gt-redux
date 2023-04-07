"use client"

import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '@/components/global/Layout'
import Search from '@/components/Search'
// import SearchResults from '@/components/SearchResults'
// import SSRSearchResults from '@/components/SSRSearchResults'
import utilStyles from '@/styles/utils.module.scss'
import styles from '@/styles/Home.module.scss'

import { getEventsData } from '@/lib/gametimeData'

import { store } from "@/store"
import { useDispatch, useSelector } from 'react-redux'
import { setSearchResults } from '@/store/searchSlice'
import Providers from '@/components/Provider'
import Preloader from "@/components/Preloader"


export default function Home({ resultsData }) {
  
  return (
    <Layout home>
      <main>
        <Preloader searchResults={resultsData}/>
        <Providers>
          <h1 className={`${utilStyles.heading2Xl}`}>{siteTitle}</h1>
          <Image
            priority
            src="/Gametime_logo.svg"
            width={1000}
            height={50}
            alt="Gametime Logo"
            classname={styles.mainLogo}/>
          <Search />
          {/* <SearchResults results={resultsData} /> */}
          {/* <SSRSearchResults /> */}
        </Providers>
      </main>
    </Layout>
  )
}

// Initial load of api data
export async function getStaticProps() {
  console.log
  const libProjectsEventData = await getEventsData()
  store.dispatch(setSearchResults(libProjectsEventData))
  
  return {
    props: {
      resultsData: libProjectsEventData
    },
    revalidate: 2
  }
}
