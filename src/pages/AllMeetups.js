import MeetupList from '../components/meetups/MeetupList'
import { useEffect, useState } from 'react'

// const DUMMY_DATA = [{
//     id: 'm1',
//     title: 'meetup 1',
//     description: 'This is the first meetup.'
//   },{
//     id: 'm2',
//     title: 'meetup 2',
//     description: 'This is the second meetup.'
//   }]

function AllMeetupsPage () {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://react-meetup-d7c0b-default-rtdb.firebaseio.com/meetups.json')
      .then(res => {
        return res.json()
      }).then(data => {
        const meetups = []
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          }
          meetups.push(meetup)
        }
        setIsLoading(false)
        setLoadedMeetups(data)
      })
      .catch(err => console.error(err))
  }, [])

  if (isLoading) {
    return (
    <section>
      <p>Loading...</p>
    </section>
    )}

  return (
  <div>
    <h1>All Meetups</h1>
    <MeetupList meetups={loadedMeetups} />
  </div>
  )
}

export default AllMeetupsPage