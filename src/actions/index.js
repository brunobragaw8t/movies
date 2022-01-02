export const storeMovies = (movies) => {
  return {
    type: 'STORE_MOVIES',
    payload: {
      movies: movies,
    },
  }
}
