const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_MOVIES':
      return action.payload.movies;

    default:
      return state;
  }
}

export default moviesReducer;
