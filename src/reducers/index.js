import moviesReducer from './movies';
import favouritesReducer from './favourites';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  movies: moviesReducer,
  favourites: favouritesReducer,
});

export default rootReducer;
