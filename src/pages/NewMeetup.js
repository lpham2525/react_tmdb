import { useHistory } from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm"

function NewMeetupPage() {
  const history = useHistory()

  function addMeetupHandler(meetupData) {
    fetch('https://react-meetup-d7c0b-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      history.replace('/')
    })
    catch (err=> console.error(err))
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>
  )
}

export default NewMeetupPage