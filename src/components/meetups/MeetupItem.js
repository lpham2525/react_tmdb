import { useContext } from 'react' 
import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from "../../store/favorites-context"

function MeetupItem(props) {
  const favoritesContext = useContext(FavoritesContext)
  
  const itemIsFavorite = favoritesContext.itemIsFavorite(props.id)

  function toggleFavoriteStatus () {
    if(itemIsFavorite) {
      favoritesContext.removeFavorite(props.id)
    } else {
      favoritesContext.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description
      })
    }
  }

  return <li className={classes.item}>
    <Card>
    <div className={classes.image}>
      <img src="{props.image}" alt="{props.title}" />
    </div>
    <div className={classes.content}>
      <h3>{props.title}</h3>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </div>
    <div className={classes.actions}>
      <button onClick={toggleFavoriteStatus}>{itemIsFavorite ? 'Remove from Favorites</button' : 'Add to Favorites'}>
    </div>
    </Card>
  </li>
}

export default MeetupItem