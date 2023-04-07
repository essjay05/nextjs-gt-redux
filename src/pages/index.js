"use client"

import Image from 'next/image'

import Layout, { siteTitle } from '@/components/global/Layout'
import Search from '@/components/Search'
import utilStyles from '@/styles/utils.module.scss'
import styles from '@/styles/Home.module.scss'

import { getEventsData } from '@/lib/gametimeData'

import { store } from "@/store"
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
        </Providers>
      </main>
    </Layout>
  )
}

// Initial load of api data
export async function getStaticProps() {
  const libProjectsEventData = await getEventsData()
  store.dispatch(setSearchResults(libProjectsEventData))
  
  return {
    props: {
      resultsData: libProjectsEventData
    },
    revalidate: 2
  }
}
