export const storeMovies = (movies) => {
  return {
    type: 'STORE_MOVIES',
    payload: {
      movies: movies,
    },
  }
}

export const getFavourites = () => {
  return {
    type: 'GET_FAVOURITES',
  }
}

export const toggleFavourite = (id, title) => {
  return {
    type: 'TOGGLE_FAVOURITE',
    payload: {
      id: id,
      title: title,
    },
  }
}
