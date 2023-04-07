export async function getEventsData(searchTerm) {
  // const apiUrl=`https://mobile-staging.gametime.co/v1/search?q=${searchTerm}`
  try {
    const eventsData = await fetch(`https://mobile-staging.gametime.co/v1/search`)
    // console.log('projects : getEventsData test eventsData:')
    // console.log(eventsData)
    return await eventsData.json()
  } catch(err) {
    console.log('Error retrieving events data.')
    console.error(err)
  }
}