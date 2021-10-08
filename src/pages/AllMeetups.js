import MeetupList from '../components/meetups/MeetupList'

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'meetup 1',
    description: 'This is the first meetup.'
  },
  {
    id: 'm2',
    title: 'meetup 2',
    description: 'This is the second meetup.'
  }
]

function AllMeetupsPage () {
  return (
  <div>
    <h1>All Meetups</h1>
    <MeetupList meetups={DUMMY_DATA} />
  </div>
  )
}

export default AllMeetupsPage