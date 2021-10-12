import { useContext } form 'react'
import FavoritesContext form '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList'

function FavoritesPage() {
  const FavoritesContext = useContext(FavoritesContext)

  let content

  if (favoritesContext.totalFavorites === 0) {
    content = <p>You have no favorites yet. Start adding some?</p>
  } else {
    content = <MeetupList meetups = {FavoritesContext.favorites} />
  }

  return ( 
    <section>
      <h1>My Favorites</h1>
        {content}
    </section>
  )
}

export default FavoritesPage