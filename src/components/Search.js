import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeMovies } from '../actions';
import { ContentSection } from './ContentSection';

const OMDB_KEY = '4236c616';

export const Search = () => {
  const [text, setText] = useState('');
  const [formIsLoading, setFormIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const dispatch = useDispatch();

  const searchSubmit = (e) => {
    e.preventDefault();

    setFormIsLoading(true);
    setNoResults(false);

    fetch(`http://www.omdbapi.com/?apikey=${OMDB_KEY}&type=movie&s=${text}`)
    .then(res => res.json())
    .then(json => {
      if (json.Response === 'True') {
        dispatch(storeMovies(json.Search));
      } else {
        dispatch(storeMovies([]));

        setNoResults(true);
      }

      setFormIsLoading(false);
    });
  }

  return (
    <ContentSection>
      <div className="container">
        <div className="search-box bg-light p-5">
          <h1 className="text-center mb-3">Search Movie</h1>

          <form
            className="d-flex flex-column"
            onSubmit={(e) => searchSubmit(e)}
          >
            <div className="mb-3">
              <input
                type="text"
                className="form-control form-control-lg text-center"
                placeholder="Enter your search here..."
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>

            {noResults && (
              <div className="alert alert-danger text-center">
                No movies found.
              </div>
            )}

            {!formIsLoading ? (
              <button type="submit" className="btn btn-primary btn-lg align-self-end">
                <i className="bi bi-search me-1"></i>
                Search
              </button>
            ) : (
              <button disabled className="btn btn-primary btn-lg align-self-end">
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Searching...
              </button>
            )}
          </form>
        </div>
      </div>
    </ContentSection>
  )
}
