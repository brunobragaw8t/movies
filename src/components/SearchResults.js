import { useSelector } from 'react-redux';

import { ContentSection } from './ContentSection';
import { Movie } from './Movie';

export const SearchResults = () => {
  const movies = useSelector(state => state.movies);

  if (movies.length) {
    return (
      <ContentSection>
        <div className="container">
          <div className="movies-grid row gy-3">
            {movies.map(movie => (
              <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <Movie key={movie.imdbID} movie={movie} />
              </div>
            ))}
          </div>
        </div>
      </ContentSection>
    );
  } else {
    return false;
  }
}
