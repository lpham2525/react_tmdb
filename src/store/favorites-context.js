import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
})

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([])

  function addFavoriteHandler(favoriteMeetup) {
    setFavorites(prevFavorites => {
      return prevFavorites.concat(favoriteMeetup)
    })
  }

  function removeFavoriteHandler() {
    setFavorites(prevFavorites => {
      return prevFavorites.filter(meetup =>
        meetup.id !== meetupId)
      })
  }

  function ItemIsFavoriteHandler(meetupId) {
    return favorites.some(meetup => meetup.id === meetupId)
  }

  const context = {
    favorites: favorites,
    totalFavorites: favorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: ItemIsFavoriteHandler
  }

  return (
  <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
  )}

export default FavoritesContext
