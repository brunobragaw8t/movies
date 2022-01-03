import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NotFound } from './NotFound';
import { ContentSection } from './ContentSection';

const OMDB_KEY = '4236c616';

export const MovieDetails = () => {
  const params = useParams();
  const [notFound, setNotFound] = useState(false);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${OMDB_KEY}&i=${params.id}&plot=full`)
    .then(res => res.json())
    .then(json => {
      if (json.Response === 'True') {
        setMovie(json);
      } else {
        setNotFound(true);
      }
    })
    .catch(error => {
      setNotFound(true);
    });
  }, []);

  if (movie) {
    return (
      <ContentSection>
        <div className="container">
          <div className="row gx-5">
            <div className="col-md-3">
              {movie.Poster !== 'N/A' ? (
                <img src={movie.Poster} alt={movie.Title} className="img-fluid w-100" />
              ) : (
                <img src="/img/default.jpg" alt={movie.Title} className="img-fluid w-100" />
              )}
            </div>

            <div className="col-md-9">
              <h1>{movie.Title}</h1>

              <div>
                {movie.Year} &bull; {movie.Genre} &bull; {movie.Runtime}
              </div>

              <p className="mt-2">
                <strong>Writer:</strong> {movie.Writer}<br />
                <strong>Starring:</strong> {movie.Actors}
              </p>

              <h4>Synopsys</h4>
              <p>{movie.Plot}</p>
            </div>
          </div>
        </div>
      </ContentSection>
    );
  } else if (notFound) {
    return (
      <NotFound />
    );
  } else {
    return (
      <ContentSection>
        <div className="text-center">
          <div
            className="spinner-border text-primary"
            role="status"
            style={{width: '3rem', height: '3rem'}}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </ContentSection>
    );
  }
}
