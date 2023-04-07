export async function getEventsData() {
  try {
    const eventsData = await fetch(`https://mobile-staging.gametime.co/v1/search`)
    return await eventsData.json()
  } catch(err) {
    console.log('Error retrieving events data.')
    console.error(err)
  }
}