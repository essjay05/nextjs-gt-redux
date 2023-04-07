import Head from 'next/head'
import Image from 'next/image'

import Layout, { siteTitle } from '@/components/global/Layout'
import Search from '@/components/Search'
import SSRSearchResults from '@/components/SSRSearchResults'
import utilStyles from '@/styles/utils.module.scss'
import styles from '@/styles/Home.module.scss'

import { getEventsData } from '@/lib/gametimeData'

import { store } from "@/store"
import { useDispatch, useSelector } from 'react-redux'
import { setSearchResults } from '@/store/searchSlice'

export default function Home({ resultsData }) {

  // console.log('Home resultsData:')
  // console.log(resultsData)

  const { events, performers, venues } = {...resultsData}

  console.log('Home events count')
  console.log(events.length)

  // const dispatch = useDispatch()

  store.dispatch(setSearchResults(resultsData))
  
  return (
    <Layout home>
      <main>
        <h1 className={`${utilStyles.heading2Xl}`}>{siteTitle}</h1>
        <Image
          priority
          src="/Gametime_logo.svg"
          width={1000}
          height={50}
          alt="Gametime Logo"
          classname={styles.mainLogo}/>
        <Search eventsData={events}/>
        <SSRSearchResults />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const libProjectsEventData = await getEventsData()
  // console.log("home page libProjectsEventsData")
  // console.log(libProjectsEventData)
  
  return {
    props: {
      resultsData: libProjectsEventData
    }
  }
}
