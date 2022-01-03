const favouritesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_FAVOURITES': {
      const localFavourites = localStorage.getItem('favourites');

      if (localFavourites === null) {
        return state;
      }

      return JSON.parse(localFavourites);
    }

    case 'TOGGLE_FAVOURITE': {
      var alreadyExists = false;

      state.forEach(favourite => {
        if (favourite.id === action.payload.id) {
          alreadyExists = true;
        }
      });

      if (alreadyExists) {
        var newState = state.filter(item => item.id !== action.payload.id);
      } else {
        var newState = [
          ...state,
          {
            id: action.payload.id,
            title: action.payload.title,
          },
        ];
      }

      localStorage.setItem('favourites', JSON.stringify(newState));

      return newState;
    }

    default:
      return state;
  }
}

export default favouritesReducer;
