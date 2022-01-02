import { Link } from "react-router-dom"

export const Movie = ({ movie }) => {
  return (
    <div className="movies-item text-center">
      <div className="image">
        {movie.Poster !== 'N/A' ? (
          <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
        ) : (
          <img src="img/default.jpg" alt={movie.Title} className="img-fluid" />
        )}
      </div>

      <h6 className="mt-2">{movie.Title}</h6>

      <small className="d-block mb-3">{movie.Year}</small>

      <Link className="btn btn-sm btn-primary mt-auto w-100" to={`/movies/${movie.imdbID}`}>
        View details
      </Link>
    </div>
  )
}
